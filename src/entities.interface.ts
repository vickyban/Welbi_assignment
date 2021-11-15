/*

What is "name"?
- is it Full Name? If so, some doesn't match "FirstName" + "LastName"
- is this filled by the users or derived from "FirstName + LastName", because it received BAD input [object HTMLInputElement], [object HTMLInputElement]

What is wrong the the "status"?
- has BAD Input: text in different cases, empty string or missing or 'sdfdsadsafdsf####' or true
- appear to be manually typed in by the user which is BAD BAD 
    => hard for users to know what existing statuses they can search for
    => extra work for db search because need to check for case-insensitive
    => hard to UI/UX that prevent bad input
    => hard for us to gather and analyze data 

  Solution:
  - if there is only a set of values for the WHOLE industry => use ENUM
  - let organisation users to create and maintain their own set of values 
  - query that set as dropdown options for users to select



*/

export type Ambulation = "CANE" | "NOLIMITATIONS" | "WALKER" | "WHEELCHAIR";

export type LevelOfCare = "INDEPENDENT" | "ASSISTED" | "MEMORY" | "LONGTERM";
// {
//   INDEPENDENT = 'INDEPENDENT',
//   ASSISTED = 'ASSISTED',
//   MEMORY = 'MEMORY',
//   LONGTERM = 'LONGTERM',
// }

export const attendanceStatuses = ["Active", "Undefined", "Canceled", "Declined", "Passive"] as const;
export type AttendanceStatus = typeof attendanceStatuses[number];

export interface IResidentProgramAttendance {
  status: AttendanceStatus;
  programId: string;
  author?: string; //"57fc817f-fa13-47e0-8570-ae3d57f1b42d"
}

export interface IResident {
  id: string;
  name: string; // bad data: "[object HTMLInputElement], [object HTMLInputElement]", name doesn't match FirstName + LastName
  firstName: string; // sometimes capital uppercase, lowercase
  lastName: string; // same issue as firstName
  preferredName?: string; //same issue as firstName +  bad data: sometimes "" or not existed
  status?: any; // 'HERE' | 'ISOLATION' | 'LOA' | '' | 'sdfdsadsafdsf####' | true // Bad data: sometime no status or "Loa"
  room: string; //bad data: "sdadf"
  levelOfCare: string;
  ambulation: Ambulation;
  author?: string; // Bad data: {0}??? "26174d38-39c6-43e3-9562-3ff5cc6e7255"

  birthDate: {
    "@ts": string; //"1974-11-20T07:00:00Z"
  };
  moveInDate: {
    "@ts": string;
  };
  createdAt: {
    "@ts": string; //"1974-11-20T07:00:00Z"
  };
  updatedAt: {
    "@ts": string; //"1974-11-20T07:00:00Z"
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
  parentId?: number; //???
  name: string;
  location: string;
  allDay: boolean;
  start: string; // "2009-11-12T19:00:00.000Z",
  end: string; // "2009-11-12T19:00:00.000Z",
  tags: any[];
  attendance: IProgramResidenceAttendance[];
  dimension: string; //"Intellectual" | "Community" | "Physical" | "Social" | "test" | "All-encompassing"; // What does this mean?
  facilitators: any[]; //[ "Rec Aide" ], ['Resident'],
  levelOfCare: any[];
  hobbies: any[]; //[ "Debate", "Public Speaking"]
  isRepeated: boolean;
  recurrence?: {
    frequency: "YEARLY";
    interval: number;
    byMonth: number;
    byMonthday: number;
  };
  author?: string;
}
