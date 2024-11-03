import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

import { useAppDispatch, useAppSelector } from "../hooks";
import { setYear } from "../reducers/searchReducer";

const YearFilter = () => {

  const year = useAppSelector(state => state.search.year);
  const dispatch = useAppDispatch();

  const handleChange = (
    _event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    dispatch(setYear(newValue));
  };

  return (
    <>
      <FormControl size="sm">
        <FormLabel>Year</FormLabel>
        <Select
          defaultValue={year}
          onChange={handleChange}
          size="sm"
          placeholder="Filter by year"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="all">All Years</Option>
          {Array.from({ length: 2025 - 1900 }, (_, i) => i + 1900)
            .reverse()
            .map((y) => (
              <Option value={y}>{y}</Option>
            ))}
        </Select>
      </FormControl>
    </>
  );
};

export default YearFilter;
