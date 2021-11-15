import { Typography } from "@mui/material";
import { ColumnType, Table } from "../../components/Table";
import { IResidentProgramAttendance } from "../../entities.interface";

const columns: ColumnType<IResidentProgramAttendance>[] = [
  { field: "programId", headerName: "Program Id" },
  { field: "status", headerName: "Status", width: 70 },
  {
    field: "author",
    headerName: "Status",
    width: 90,
  },
];

type Props = {
  data: IResidentProgramAttendance[];
};
export const AttendanceTable = ({ data }: Props) => {
  return (
    <div>
      <Typography variant="subtitle1" fontWeight="bold">
        Program Attendance List
      </Typography>
      <Table<IResidentProgramAttendance> data={data} columns={columns} keyExtractor={(data) => data.programId} />
    </div>
  );
};
