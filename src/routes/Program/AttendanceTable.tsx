import { Typography, Box, Button } from "@mui/material";
import { StyledHeader } from "../../components/Header";
import { ColumnType, Table } from "../../components/Table";
import { useProgramsContext } from "../../contexts/ProgramsContext";
import { IProgramResidenceAttendance } from "../../entities.interface";
import { CreateAttendanceModal } from "./CreateAttendanceModal";

const columns: ColumnType<IProgramResidenceAttendance>[] = [
  { field: "residentId", headerName: "Resident Id" },
  { field: "status", headerName: "Status", width: 70 },
  {
    field: "author",
    headerName: "Author",
    width: 90,
  },
];

type Props = {
  programId: string;
  data: IProgramResidenceAttendance[];
};
export const AttendanceTable = ({ data, programId }: Props) => {
  const { refetch } = useProgramsContext();
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
        <CreateAttendanceModal programId={programId} title={`Add Resident Attendance`} onCreated={refetch}>
          {(open) => (
            <Button variant="contained" size="small" onClick={open}>
              Add Attendance
            </Button>
          )}
        </CreateAttendanceModal>
      </StyledHeader>
      <Table<IProgramResidenceAttendance> data={data} columns={columns} keyExtractor={(data) => data.residentId} />
    </Box>
  );
};
