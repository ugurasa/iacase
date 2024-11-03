import React, { useRef } from "react";
import Input, { InputProps } from "@mui/joy/Input";

import { isEmpty } from "../utils";

type DebounceProps = {
  handleDebounce: (value: string) => void;
  debounceTimeout: number;
};

const DebouncedInput = (props: InputProps & DebounceProps) => {
  const { handleDebounce, debounceTimeout, ...other } = props;

  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if(!isEmpty(event.target.value)) {
        handleDebounce(event.target.value);
      }
    }, debounceTimeout);
  };

  return <Input {...other} onChange={handleChange} />;
};

export default DebouncedInput;
