import { Button, Stack } from "@mui/joy";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";

import styles from "../styles"

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={styles.boxCenter}
    >
      <Stack gap={2}>
        <Typography level="h1" component="h1">
          404 not found!
        </Typography>
        <Button onClick={() => navigate("/")}>Go for search movie</Button>
      </Stack>
    </Box>
  );
};

export default NotFound;
