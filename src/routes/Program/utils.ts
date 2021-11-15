import { FieldType, FormBuilderType } from "../../components/Form/types";
import * as yup from "yup";
import { ambulationSelectOptions, levelOfCareSelectOptions, getFormValuesValidator } from "../../components/Form/utils";
import { IProgram, LevelOfCare } from "../../entities.interface";

const validationSchema = yup.object({
  name: yup.string().required().label("Name"),
  location: yup.string().required().label("Location"),
  start: yup.date().required().label("Start Date"),
  end: yup.date().label("End Date"),
});

export const validateForm = getFormValuesValidator(validationSchema);

export const formSchema: FormBuilderType = {
  name: "Program",
  fields: [
    {
      name: "name",
      label: "Name",
      fieldType: FieldType.TEXT,
      type: "text",
    },
    {
      name: "location",
      label: "Location",
      fieldType: FieldType.TEXT,
      type: "text",
    },
    {
      name: `allDay`,
      label: "",
      fieldType: FieldType.CHECKBOXES,
      data: { label: "All-Day", value: false },
    },
    {
      name: `start`,
      label: "Start date",
      fieldType: FieldType.DATE,
    },
    {
      name: `end`,
      label: "End date",
      fieldType: FieldType.DATE,
    },
    {
      name: "dimension",
      label: "Dimension",
      fieldType: FieldType.TEXT,
      type: "text",
    },
    {
      name: "levelOfCare",
      label: "Level of Care",
      fieldType: FieldType.SELECT,
      data: levelOfCareSelectOptions,
      multiple: true,
    },
    {
      name: "facilitators",
      label: "Facilitators",
      fieldType: FieldType.SELECT,
      data: ambulationSelectOptions,
      multiple: true,
    },
    {
      name: `isRepeated`,
      label: "",
      fieldType: FieldType.CHECKBOXES,
      data: { label: "Is Repeated", value: false },
    },
  ],
};

export class ProgramFormInput implements Omit<IProgram, "id" | "attendance" | "start" | "end"> {
  id?: string;
  name!: string;
  location!: string;
  allDay!: boolean;
  tags: string[];
  dimension!: string;
  levelOfCare: LevelOfCare[];
  facilitators: LevelOfCare[];
  hobbies: string[];
  author?: string;
  start?: string;
  end?: string;
  isRepeated!: boolean;

  private constructor() {
    this.tags = [];
    this.facilitators = [];
    this.levelOfCare = [];
    this.hobbies = [];
  }

  static empty() {
    return new ProgramFormInput();
  }

  static fromProgramType(resident: IProgram) {
    const { attendance, ...formInput } = resident;
    return {
      ...formInput,
    } as ProgramFormInput;
  }

  static toSubmitForm(formInput: ProgramFormInput) {
    return {
      ...formInput,
    };
  }
}
