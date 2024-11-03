import Box from "@mui/joy/Box";

import YearFilter from "../components/YearFilter";
import SearchBar from "../components/SearchBar";
import PaginationBar from "../components/PaginationBar";
import DataTable from "../components/DataTable";
import { Typography } from "@mui/joy";

import styles from "../styles";

const MovieTable = () => {
  return (
    <>
      <Typography level="h1">Movie Search</Typography>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: { xs: "none", sm: "flex" },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": {
            minWidth: { xs: "120px", md: "160px" },
          },
        }}
      >
        <SearchBar />
        <YearFilter />
      </Box>
      <Box sx={styles.boxCenter}>
        <DataTable />
      </Box>

      <PaginationBar />
    </>
  );
};

export default MovieTable;
