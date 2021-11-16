export type Ambulation = "CANE" | "NOLIMITATIONS" | "WALKER" | "WHEELCHAIR";

export type LevelOfCare = "INDEPENDENT" | "ASSISTED" | "MEMORY" | "LONGTERM";

export const attendanceStatuses = ["Active", "Undefined", "Canceled", "Declined", "Passive"] as const;
export type AttendanceStatus = typeof attendanceStatuses[number];

export interface IResidentProgramAttendance {
  status: AttendanceStatus;
  programId: string;
  author?: string;
}

export interface IResident {
  id: string;
  name: string; // bad data: "[object HTMLInputElement], [object HTMLInputElement]", name doesn't match FirstName + LastName
  firstName: string; // sometimes capital uppercase, lowercase
  lastName: string; // same issue as firstName
  preferredName?: string;
  status?: any; // 'HERE' | 'ISOLATION' | 'LOA' | '' | 'sdfdsadsafdsf####' | true // Bad data: sometime no status or "Loa"
  room: string;
  levelOfCare: string;
  ambulation: Ambulation;
  author?: string;
  birthDate: {
    "@ts": string;
  };
  moveInDate: {
    "@ts": string;
  };
  createdAt: {
    "@ts": string;
  };
  updatedAt: {
    "@ts": string;
  };
  attendance: IResidentProgramAttendance[];
}

export interface IProgramResidenceAttendance {
  residentId: string;
  status: AttendanceStatus;
  author?: string;
}
export interface IProgram {
  id: string;
  parentId?: number;
  name: string;
  location: string;
  allDay: boolean;
  start: string;
  end: string;
  tags: any[];
  attendance: IProgramResidenceAttendance[];
  dimension: string;
  facilitators: any[];
  levelOfCare: any[];
  hobbies: any[];
  isRepeated: boolean;
  recurrence?: {
    frequency: "YEARLY";
    interval: number;
    byMonth: number;
    byMonthday: number;
  };
  author?: string;
}
