import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";

import styles from "../styles";

const MovieDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, error, loading } = useFetch("https://www.omdbapi.com", {
    params: {
      apiKey: import.meta.env.VITE_OMDB_API_KEY,
      i: params.imdbId,
    },
  });

  if (loading) {
    return <Box sx={styles.boxCenter}>
      <CircularProgress size="lg"/>
    </Box>;
  }

  if (error || data?.Response == "False") {
    navigate("/not-found");
  }

  const {
    Plot,
    Title,
    Year,
    Poster,
    Runtime,
    imdbRating,
    Writer,
    Genre,
    Director,
    Actors,
  } = data!;

  return (
    <>
      <Box width={"100%"} sx={{ display: "flex" }}>
        <Typography level="h1" component="h1">
          {Title}
        </Typography>
      </Box>
      <Stack spacing={30} direction="row" useFlexGap sx={{ flexWrap: "wrap" }}>
        <Box sx={{ width: 200 }}>
          <Stack
            spacing={1}
            direction="row"
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            <Typography component="h1">{`${Year} • ${Runtime}`}</Typography>
            <Box
              width={"100%"}
              sx={{ display: "flex", alignItems: "center", padding: 5 }}
            >
              <img src={Poster} />
            </Box>
          </Stack>
        </Box>

        <Box sx={{ width: 600 }}>
          <Stack
            spacing={1}
            direction="row"
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            <Box height={100} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="solid"
                sx={{
                  backgroundColor: "#f3ce13",
                  color: "black",
                  fontWeight: "bold",
                }}
                component="h1"
              >
                {`IMDb Rating: ${imdbRating} / 10`}
              </Typography>
            </Box>

            <Typography>{Plot}</Typography>
            <Box sx={{ display: "flex" }}>
              <Stack spacing={2} direction="row" mt={5}>
                {Genre}
              </Stack>
            </Box>
          </Stack>
          <Stack spacing={2} direction="column" mt={5}>
            <Stack spacing={1} direction="row">
              <Typography variant="outlined" component="h1">
                Director
              </Typography>
              <Typography component="h1">{Director}</Typography>
            </Stack>

            <Stack spacing={1} direction="row">
              <Typography variant="outlined" component="h1">
                Writer
              </Typography>
              <Typography component="h1">{Writer}</Typography>
            </Stack>

            <Stack spacing={1} direction="row">
              <Typography variant="outlined" component="h1">
                Cast
              </Typography>
              <Typography component="h1">{Actors}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default MovieDetails;
