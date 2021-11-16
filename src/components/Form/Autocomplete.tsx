import React, { useState } from "react";
import { Autocomplete as RffAutocomplete, AutocompleteData } from "mui-rff";
import { AutocompleteFieldBuilderType } from "./types";
import { createFilterOptions } from "@mui/material";

const filter = createFilterOptions<AutocompleteData>();

export type AutocompleteProps = Omit<AutocompleteFieldBuilderType, "fieldType"> & {};

export const Autocomplete: React.FC<AutocompleteProps> = ({ name, label, data, ...autocompleteProps }) => {
  const [options, setOptions] = useState<AutocompleteData[]>(data);
  return (
    <RffAutocomplete
      label={label}
      name={name}
      multiple
      options={options}
      getOptionValue={(option: any) => {
        if (typeof option === "string") {
          return option;
        } else {
          return option.value;
        }
      }}
      getOptionLabel={(option: any) => option.label}
      disableCloseOnSelect
      filterOptions={(options, state) => {
        const stateWithFormattedInputValue = { ...state, inputValue: formatTagValue(state.inputValue) };
        const filtered = filter(options, stateWithFormattedInputValue);
        const { inputValue } = stateWithFormattedInputValue;
        const isExisting = options.some((option) => inputValue === option.value);
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            value: inputValue,
            label: inputValue,
          });
        }
        return filtered;
      }}
      onChange={(_, selectedOptions, reason, detail) => {
        if (reason === "selectOption") {
          setOptions((curOptions) => {
            const newOption = (selectedOptions as AutocompleteData[]).find((value) => !curOptions.includes(value));
            if (!newOption) return curOptions;
            return [...curOptions, newOption];
          });
        }
      }}
      {...autocompleteProps}
    />
  );
};

const formatTagValue = (value: string) => {
  return value.trim();
};
