import { Autocomplete as RffAutocomplete, AutocompleteData, AutocompleteProps as RffAutocompleteProps } from "mui-rff";

export type SingleSelectAutocompleteProps = Omit<
  RffAutocompleteProps<AutocompleteData, false, undefined, false>,
  "options" | "label"
> & {
  label: string;
  data: AutocompleteData[];
};

export const SingleSelectAutocomplete = ({ data: options, ...autocompleteProps }: SingleSelectAutocompleteProps) => {
  return <RffAutocomplete options={options} {...autocompleteProps} />;
};
