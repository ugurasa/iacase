import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/joy/Button";

import { useAppDispatch, useAppSelector } from "../hooks";
import { setType } from "../reducers/searchReducer";
import { capitalizeFirstLetter } from "../utils";

const TypeFilter = () => {
  const type = useAppSelector((state: any) => (state.search.type));
  const dispatch = useAppDispatch();

  const types = ["all", "movie", "series", "episode"];

  return (
    <>
      <Dropdown>
        <MenuButton
          endDecorator={<ArrowDropDownIcon />}
          slots={{ root: Button }}
          slotProps={{
            root: { variant: "plain", color: "neutral", size: "sm" },
          }}
        >
          {capitalizeFirstLetter(type)}
        </MenuButton>
        <Menu size="sm" sx={{ minWidth: 140 }}>
          {types.map((t) => (
            <MenuItem onClick={() => dispatch(setType(t))}>{capitalizeFirstLetter(t)}</MenuItem>
          ))}
        </Menu>
      </Dropdown>
    </>
  );
};

export default TypeFilter;
