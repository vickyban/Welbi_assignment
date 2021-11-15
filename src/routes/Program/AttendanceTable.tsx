import { Typography, Box, Button } from "@mui/material";
import { StyledHeader } from "../../components/Header";
import { ColumnType, Table } from "../../components/Table";
import { IProgramResidenceAttendance } from "../../entities.interface";

const columns: ColumnType<IProgramResidenceAttendance>[] = [
  { field: "residentId", headerName: "Resident Id" },
  { field: "status", headerName: "Status", width: 70 },
  {
    field: "author",
    headerName: "Status",
    width: 90,
  },
];

type Props = {
  data: IProgramResidenceAttendance[];
};
export const AttendanceTable = ({ data }: Props) => {
  const onAddAttendance = () => {};
  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <StyledHeader>
        <Typography variant="subtitle1" fontWeight="bold">
          Resident Attendance List
        </Typography>
        <Button variant="contained" size="small" onClick={onAddAttendance}>
          Add Attendance
        </Button>
      </StyledHeader>
      <Table<IProgramResidenceAttendance> data={data} columns={columns} keyExtractor={(data) => data.residentId} />
    </Box>
  );
};
