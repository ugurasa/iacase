import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import { useAppDispatch, useAppSelector } from "../hooks";
import {
  nextPage,
  previewPage,
  jumpToPage,
} from "../reducers/searchReducer";
import { createArray } from "../utils";

const PaginationBar = () => {
  const { page, maxPage } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  return (
    <Box
      className="Pagination-laptopUp"
      sx={{
        pt: 2,
        gap: 1,
        [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <Button
        disabled={!(Number(page) > 1)}
        size="sm"
        variant="outlined"
        color="neutral"
        startDecorator={<KeyboardArrowLeftIcon />}
        onClick={() => dispatch(previewPage())}
      >
        Previous
      </Button>

      <Box sx={{ flex: 1 }} />
      <Button
        size="sm"
        variant={"outlined"}
        color="neutral"
        onClick={() => dispatch(jumpToPage(1))}
      >
        First
      </Button>
      {[ ...createArray(Math.max(page - 5, 1) , Math.min(page + 5, maxPage)).map(p => p.toString())].map((p) => (
        <IconButton
          key={p}
          size="sm"
          variant={p === page.toString() ? "solid" : "plain"}
          color="neutral"
          onClick={() => {
            dispatch(jumpToPage(Number(p)))
          }}
        >
          {p}
        </IconButton> 
      ))}
      <Button
        size="sm"
        variant={"outlined"}
        color="neutral"
        onClick={() => dispatch(jumpToPage(maxPage))}
      >
        Last
      </Button>
      <Box sx={{ flex: 1 }} />
      <Button
        size="sm"
        disabled={page === maxPage}
        variant={"outlined"}
        color="neutral"
        endDecorator={<KeyboardArrowRightIcon />}
        onClick={() => dispatch(nextPage())}
      >
        Next
      </Button>
    </Box>
  );
};

export default PaginationBar;
