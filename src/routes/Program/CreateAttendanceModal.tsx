import { useState, useMemo, ReactElement } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Form from "../../components/Form/Form";
import { useResidentsContext } from "../../contexts/ResidentsContext";
import { FieldType, FormBuilderType } from "../../components/Form/types";
import { attendanceStatusSelectOptions, getFormValuesValidator } from "../../components/Form/utils";
import { useApi } from "../../config/apiClient";
import { AttendanceStatus } from "../../entities.interface";
import { createFilterOptions } from "@mui/material";
import { AutocompleteData } from "mui-rff";
import * as yup from "yup";

const validationSchema = yup.object({
  residentId: yup.string().required().label("Resident"),
  status: yup.string().required().label("Status"),
});

export const validateForm = getFormValuesValidator(validationSchema);

const residentFilterOptions = createFilterOptions({
  stringify: (option: AutocompleteData) => `${option.firstName} ${option.lastName}`,
});

class AttendanceFormInput {
  residentId?: string;
  status: AttendanceStatus;

  constructor() {
    this.status = "Undefined";
  }

  static empty() {
    return new AttendanceFormInput();
  }
}

export type Props = {
  title?: string;
  programId: string;
  onCreated: (value: string) => Promise<any> | void;
  children: (open: () => void) => ReactElement;
};

export const CreateAttendanceModal = ({ title = "Add Resident Attendance", programId, onCreated, children }: Props) => {
  const [open, setOpen] = useState(false);
  const { residents } = useResidentsContext();
  const { call } = useApi();
  const formSchema: FormBuilderType = useMemo(
    () => ({
      name: "",
      fields: [
        {
          fieldType: FieldType.SINGLE_SELECT_AUTOCOMPLETE,
          name: "residentId",
          label: "Selected Resident",
          data: residents,
          getOptionLabel: (option) => `${option.firstName} ${option.lastName} (ID:${option.id})`,
          getOptionValue: (option) => option.id,
          filterOptions: residentFilterOptions,
        },
        {
          fieldType: FieldType.SELECT,
          name: "status",
          label: "Status",
          data: attendanceStatusSelectOptions,
        },
      ],
    }),
    [residents],
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onFormSubmit = (values: AttendanceFormInput) => {
    return call({
      method: "post",
      url: `/programs/${programId}/attend`,
      data: values,
    })
      .then(({ data }) => onCreated(data))
      .finally(handleClose);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{title}</DialogTitle>
        <Form<AttendanceFormInput>
          initialValues={AttendanceFormInput.empty()}
          formSchema={formSchema}
          onSubmit={onFormSubmit}
          showActionsInHeader={false}
          submitButtonText="Add Attendance"
          validate={validateForm}
        />
      </Dialog>
      {children(handleOpen)}
    </>
  );
};
