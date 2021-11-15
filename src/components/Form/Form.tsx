/* eslint-disable @typescript-eslint/no-empty-function */
import { Stack, Typography, Box, Button, CircularProgress, ButtonProps } from "@mui/material";
import { ValidationErrors } from "final-form";
import { Checkboxes, DatePicker, Radios, Select, TextField } from "mui-rff";
import React from "react";
import { Form as RFForm, FormSpy } from "react-final-form";
import DivFlexSpacer from "../DivFlexSpacer";
import { StyledHeader } from "../Header";
import { FormBuilderType, FieldType, UnionFieldBuilderType } from "./types";

const mapFieldTypeToComponent = (field: UnionFieldBuilderType) => {
  switch (field.fieldType) {
    case FieldType.TEXT: {
      const { fieldType, ...fieldProps } = field;
      return <TextField {...fieldProps} />;
    }
    case FieldType.CHECKBOXES: {
      const { fieldType, ...fieldProps } = field;
      return <Checkboxes {...fieldProps} />;
    }
    case FieldType.RADIOS: {
      const { fieldType, ...fieldProps } = field;
      return <Radios {...fieldProps} />;
    }
    case FieldType.DATE: {
      const { fieldType, ...fieldProps } = field;
      return <DatePicker {...fieldProps} />;
    }
    case FieldType.SELECT: {
      const { fieldType, ...fieldProps } = field;
      return <Select {...fieldProps} />;
    }
    default:
      return null;
  }
};

export type ExtraFormActionType = ButtonProps & {
  label: string;
};

export type FormProps<FormValues> = {
  initialValues: FormValues;
  formSchema: FormBuilderType;
  onSubmit?: (values: FormValues) => void;
  validate?: (values: FormValues) => ValidationErrors | Promise<ValidationErrors>;
  extraActions?: ExtraFormActionType[];
};

const Form = <FormValues extends object = {}>({
  initialValues,
  formSchema,
  validate,
  onSubmit = () => {},
  extraActions,
}: FormProps<FormValues>) => {
  const { name: formName, instructions, fields } = formSchema;

  return (
    <RFForm<FormValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, submitting, invalid, dirty }) => (
        <form onSubmit={handleSubmit}>
          <StyledHeader
            sx={{
              position: "sticky",
              top: 0,
              padding: 2,
              marginBottom: 2,
              zIndex: 100,
              backgroundColor: "#f3f3f3",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {formName}
            </Typography>
            <DivFlexSpacer />
            <Button
              type="submit"
              variant="contained"
              disabled={!dirty || submitting || invalid}
              startIcon={submitting && <CircularProgress size={32} />}
            >
              Save
            </Button>
            {extraActions?.map(({ label, ...btnProps }) => (
              <Button key={label} {...btnProps} disabled={submitting}>
                {label}
              </Button>
            ))}
          </StyledHeader>

          <Box padding={2}>
            {instructions && <Typography variant="body1">{instructions}</Typography>}
            <Stack spacing={2}>
              {fields.map((field) => (
                <React.Fragment key={field.name}>{mapFieldTypeToComponent(field)}</React.Fragment>
              ))}
            </Stack>
          </Box>
          <FormSpy subscription={{ values: true }}>
            {(props) => <pre>{JSON.stringify(props.values, null, 2)}</pre>}
          </FormSpy>
        </form>
      )}
    />
  );
};

export default Form;
