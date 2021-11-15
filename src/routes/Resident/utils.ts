import { FieldType, FormBuilderType } from "../../components/Form/types";
import * as yup from "yup";
import { ambulationSelectOptions, levelOfCareSelectOptions, getFormValuesValidator } from "../../components/Form/utils";
import { Ambulation, IResident, LevelOfCare } from "../../entities.interface";

const validationSchema = yup.object({
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  preferredName: yup.string().label("Preferred Name"),
  status: yup.string().required(),
  room: yup.string().required(),
  levelOfCare: yup.string().required(),
  ambulation: yup.string().required(),
  birthDate: yup.date().required().label("Birthday"),
  moveInDate: yup.date().label("Move-In Date"),
});

export const validateForm = getFormValuesValidator(validationSchema);

export const formSchema: FormBuilderType = {
  name: "Resident",
  fields: [
    {
      name: "firstName",
      label: "First Name",
      fieldType: FieldType.TEXT,
      type: "text",
    },
    {
      name: "lastName",
      label: "Last Name",
      fieldType: FieldType.TEXT,
      type: "text",
    },
    {
      name: "preferredName",
      label: "Preferred Name",
      fieldType: FieldType.TEXT,
      type: "text",
    },
    {
      name: "status",
      label: "Status",
      fieldType: FieldType.TEXT,
      type: "text",
    },
    {
      name: "room",
      label: "Room",
      fieldType: FieldType.TEXT,
      type: "text",
    },
    {
      name: "levelOfCare",
      label: "Level of Care",
      fieldType: FieldType.SELECT,
      data: levelOfCareSelectOptions,
    },
    {
      name: "ambulation",
      label: "Ambulation",
      fieldType: FieldType.SELECT,
      data: ambulationSelectOptions,
    },
    {
      name: `birthDate`,
      label: "Birthday",
      fieldType: FieldType.DATE,
    },
    {
      name: `moveInDate`,
      label: "Move-In Date",
      fieldType: FieldType.DATE,
    },
  ],
};

export class ResidentFormInput
  implements Omit<IResident, "id" | "name" | "attendance" | "createdAt" | "updatedAt" | "birthDate" | "moveInDate">
{
  id?: string;
  firstName!: string;
  lastName!: string;
  preferredName?: string;
  room!: string;
  levelOfCare: LevelOfCare;
  ambulation: Ambulation;
  author?: string;
  birthDate?: string;
  moveInDate?: string;

  private constructor() {
    this.ambulation = "NOLIMITATIONS";
    this.levelOfCare = "INDEPENDENT";
  }

  static empty() {
    return new ResidentFormInput();
  }

  static fromResidentType(resident: IResident) {
    const { createdAt, updatedAt, attendance, ...formInput } = resident;
    return {
      ...formInput,
      birthDate: resident.birthDate["@ts"],
      moveInDate: resident.moveInDate["@ts"],
    } as ResidentFormInput;
  }

  static toSubmitForm(formInput: ResidentFormInput) {
    const date = new Date();
    return {
      ...formInput,
      name: [formInput.firstName, formInput.lastName].join(" ").trim(),
    };
  }
}
