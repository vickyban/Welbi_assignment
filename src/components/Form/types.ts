import { CheckboxData, RadioData, SelectData } from "mui-rff";

export enum FieldType {
  TEXT = "TEXT",
  MULTIPLE_SELECT = "MULTIPLE_SELECT",
  RADIO_SELECT = "RADIO_SELECT",
  DATE = "DATE",
  DATETIME = "DATETIME",
  SELECT = "SELECT",
}

export interface FieldBuilderType {
  name: string;
  label: string;
  helperText?: string;
  required?: boolean;
  fieldType: FieldType;
  index?: number;
}

export interface TextFieldBuilderType extends FieldBuilderType {
  readonly fieldType: FieldType.TEXT;
  type: "text" | "number" | "email" | "password";
}

export interface MultipleSelectFieldBuilderType extends FieldBuilderType {
  readonly fieldType: FieldType.MULTIPLE_SELECT;
  data: CheckboxData[];
}

export interface RadioSelectFieldBuilderType extends FieldBuilderType {
  readonly fieldType: FieldType.RADIO_SELECT;
  data: RadioData[];
}

export interface DateFieldBuilderType extends FieldBuilderType {
  readonly fieldType: FieldType.DATE;
}
export interface SelectFieldBuilderType extends FieldBuilderType {
  readonly fieldType: FieldType.SELECT;
  data: SelectData[];
}

export type UnionFieldBuilderType =
  | TextFieldBuilderType
  | DateFieldBuilderType
  | MultipleSelectFieldBuilderType
  | RadioSelectFieldBuilderType
  | SelectFieldBuilderType;

export interface FormBuilderType {
  id?: string;
  name: string;
  instructions?: string;
  fields: Array<UnionFieldBuilderType>;
}
