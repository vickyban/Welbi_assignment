import { setIn } from "final-form";
import { AutocompleteData, SelectData } from "mui-rff";
import { Ambulation, LevelOfCare, attendanceStatuses } from "../../entities.interface";

/**
 * Accept a Yup schema and returns a validator function to pass to Final-Form
 * @param schema Yup schema
 * @returns Final Form's validator function that valid
 */
export const getFormValuesValidator = (schema: any) => async (values: any) => {
  if (typeof schema === "function") {
    schema = schema();
  }
  try {
    await schema.validate(values, { abortEarly: false });
  } catch (err: any) {
    const errors = err.inner.reduce((formErrors: any, error: any) => {
      return setIn(formErrors, error.path, error.message);
    }, {});
    return errors;
  }
};

type AmbulationSelectData = SelectData & {
  value: Ambulation;
};
export const ambulationSelectOptions: AmbulationSelectData[] = [
  { label: "Cane", value: "CANE" },
  { label: "No Limitations", value: "NOLIMITATIONS" },
  { label: "Walker", value: "WALKER" },
  { label: "Wheelchair", value: "WHEELCHAIR" },
];

export const attendanceStatusSelectOptions: SelectData[] = attendanceStatuses.map((status) => ({
  value: status,
  label: status,
}));

type LevelOfCareSelectData = SelectData & {
  value: LevelOfCare;
};
export const levelOfCareSelectOptions: LevelOfCareSelectData[] = [
  { label: "Independent", value: "INDEPENDENT" },
  { label: "Assisted", value: "ASSISTED" },
  { label: "Memory", value: "MEMORY" },
  { label: "Long-term", value: "LONGTERM" },
];

type RecurrenceFrequencySelectDate = SelectData;
export const recurrenceFrequencySelectOptions: RecurrenceFrequencySelectDate[] = [
  { label: "Daily", value: "DAILY" },
  { label: "Weekly", value: "WEEKLY" },
  { label: "Monthly", value: "MONTHLY" },
  { label: "Yearly", value: "YEARLY" },
];

type FacilitatorsSelectDate = AutocompleteData;
export const defaultFacilitatorsSelectDateSelectOptions: FacilitatorsSelectDate[] = [
  { label: "Director of Rec", value: "Director of Rec" },
  { label: "Resident", value: "Resident" },
  { label: "Rec Aide", value: "Rec Aide" },
  { label: "Yearly", value: "YEARLY" },
];
