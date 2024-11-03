import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

import DebouncedInput from "./DebouncedInput";
import TypeFilter from "./TypeFilter";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setSearch } from "../reducers/searchReducer";

const SearchBar = () => {
  const search = useAppSelector((state) => state.search.search);
  const dispatch = useAppDispatch();
  return (
    <>
      <FormControl sx={{ flex: 1 }} size="sm">
        <FormLabel>Search for</FormLabel>
        <DebouncedInput
          defaultValue={search}
          size="sm"
          placeholder="Search"
          sx={{ flexGrow: 1 }}
          debounceTimeout={500}
          handleDebounce={(value) => {
            dispatch(setSearch(value));
          }}
          startDecorator={<TypeFilter />}
        />
      </FormControl>
    </>
  );
};

export default SearchBar;
