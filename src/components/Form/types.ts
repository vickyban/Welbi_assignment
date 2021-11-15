import { AutocompleteData, CheckboxData, RadioData, SelectData } from "mui-rff";
import { FieldProps } from "react-final-form";

export enum FieldType {
  TEXT = "TEXT",
  CHECKBOXES = "CHECKBOXES",
  RADIOS = "RADIOS",
  DATE = "DATE",
  DATETIME = "DATETIME",
  SELECT = "SELECT",
  SWITCH = "SWITCH",
  AUTOCOMPLETE = "AUTOCOMPLETE",
}

export interface FieldBuilderType {
  name: string;
  label: string;
  helperText?: string;
  required?: boolean;
  fieldType: FieldType;
  index?: number;
  fieldProps?: Partial<FieldProps<any, any>>;
}

export interface TextFieldBuilderType extends FieldBuilderType {
  readonly fieldType: FieldType.TEXT;
  type: "text" | "number" | "email" | "password";
  min?: string | number;
  max?: number;
}

export interface CheckboxesFieldBuilderType extends FieldBuilderType {
  readonly fieldType: FieldType.CHECKBOXES;
  data: CheckboxData | CheckboxData[];
}

export interface RadiosFieldBuilderType extends FieldBuilderType {
  readonly fieldType: FieldType.RADIOS;
  data: RadioData[];
}

export interface DateFieldBuilderType extends FieldBuilderType {
  readonly fieldType: FieldType.DATE;
}
export interface SelectFieldBuilderType extends FieldBuilderType {
  readonly fieldType: FieldType.SELECT;
  data: SelectData[];
  multiple?: boolean;
}

export interface AutocompleteFieldBuilderType extends FieldBuilderType {
  readonly fieldType: FieldType.AUTOCOMPLETE;
  data: AutocompleteData[];
}

export type UnionFieldBuilderType =
  | TextFieldBuilderType
  | DateFieldBuilderType
  | CheckboxesFieldBuilderType
  | RadiosFieldBuilderType
  | SelectFieldBuilderType
  | AutocompleteFieldBuilderType;

export interface FormBuilderType {
  id?: string;
  name: string;
  instructions?: string;
  fields: Array<UnionFieldBuilderType>;
}
