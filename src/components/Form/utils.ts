import { setIn } from "final-form";
import { SelectData } from "mui-rff";
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
      // setIn is a helper function that set any arbitrarily deep value inside an object using dot-bracket syntax e.g. "some.deep.values[3].whatever"
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
