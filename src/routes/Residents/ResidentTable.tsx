import { IResident } from "../../entities.interface";

import { ColumnType, Table } from "../../components/Table";
import { useNavigate } from "react-router-dom";

const columns: ColumnType<IResident>[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "status",
    headerName: "Status",
    width: 90,
  },
  {
    field: "room",
    headerName: "Room",
    width: 90,
  },
  {
    field: "levelOfCare",
    headerName: "Level of Care",
    width: 90,
  },
  {
    field: "ambulation",
    headerName: "Ambulation",
    width: 90,
  },
];

type Props = {
  data: IResident[];
};
export const ResidentTable = ({ data }: Props) => {
  const navigate = useNavigate();

  const onRowClick = (resident: IResident) => {
    navigate(`/residents/${resident.id}`);
  };

  return (
    <div style={{ height: 520, width: "100%" }}>
      <Table<IResident> data={data} columns={columns} onRowClick={onRowClick} />
    </div>
  );
};
