import useAutocomplete, {
  type SearchFunction,
} from "@src/hooks/useAutoComplete";
import React from "react";
import Input from "./Input";

interface IAutoCompleteProps {
  searchFunction: SearchFunction;
  initialInputValue?: string;
}

const AutoComplete: React.FC<IAutoCompleteProps> = ({
  searchFunction,
  initialInputValue = "",
}) => {
  const { error, inputValue, loading, results, setInputValue } =
    useAutocomplete(searchFunction, initialInputValue);

  console.log({ error, loading, results });
  return (
    <Input
      label="auto-complete"
      hideLabel
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default AutoComplete;
