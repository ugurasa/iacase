import { useEffect } from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hooks";
import useFetch from "../hooks/useFetch";
import { setMaxPage } from "../reducers/searchReducer";

const DataTable = () => {
  if (!import.meta.env.VITE_OMDB_API_KEY) {
    throw new Error("API Key is not provided!");
  }

  const { year, type, search, page } = useAppSelector((state) => state.search);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, error, loading } = useFetch("https://www.omdbapi.com", {
    params: {
      apiKey: import.meta.env.VITE_OMDB_API_KEY,
      s: search,
      page: page,
      type: type == "all" ? "" : type,
      y: year == "all" ? "" : year,
    },
  });

  if (error) {
    return <>ERROR</>;
  }

  useEffect(() => {
    if (data?.totalResults) {
      dispatch(setMaxPage(Math.ceil(Number(data.totalResults) / 10)));
    } else if (data?.Response == "False") {
      dispatch(setMaxPage(1));
    }
  }, [data]);

  const columnNames = ["Movie Name", "Release Date", "IMDb ID"];

  return (
    <>
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CircularProgress size="lg" />
        </Box>
      )}

      {data?.Response == "False" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          The searched movie is not found
        </Box>
      )}

      {!loading && data?.Response == "True" && (
        <Sheet
          className="MoviesTableContainer"
          variant="outlined"
          sx={{
            justifyContent: "center",
            borderRadius: "sm",
          }}
        >
          <Table
            aria-labelledby="Movies"
            stickyHeader
            hoverRow
            sx={{
              "--TableCell-headBackground":
                "var(--joy-palette-background-level1)",
              "--Table-headerUnderlineThickness": "1px",
              "--TableRow-hoverBackground":
                "var(--joy-palette-background-level1)",
              "--TableCell-paddingY": "4px",
              "--TableCell-paddingX": "8px",
            }}
          >
            <thead>
              {columnNames.map((columnName: string) => (
                <th
                  style={{
                    width: 120,
                    padding: "12px 6px",
                    textAlign: "center",
                  }}
                >
                  {columnName}
                </th>
              ))}
            </thead>
            <tbody>
              {data?.Search!.map(({ Title, Year, imdbID }) => {
                return (
                  <>
                    <tr
                      key={imdbID}
                      onClick={() => navigate(`/movie-details/${imdbID}`)}
                    >
                      <td style={{ textAlign: "center", width: 120 }}>
                        {Title}
                      </td>
                      <td style={{ textAlign: "center", width: 120 }}>
                        {Year}
                      </td>
                      <td style={{ textAlign: "center", width: 120 }}>
                        {imdbID}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </Sheet>
      )}
    </>
  );
};

export default DataTable;
