import { IProgram } from "../../entities.interface";

import { ColumnType, Table } from "../../components/Table";
import { useNavigate } from "react-router-dom";

const getArrayItem = (item: any, key?: string) => {
  if (item instanceof Object && key) {
    return item[key];
  }
  return item;
};

const columns: ColumnType<IProgram>[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "location", headerName: "Location", width: 130 },
  {
    field: "start",
    headerName: "Start Date",
    width: 90,
  },
  {
    field: "end",
    headerName: "End Date",
    width: 90,
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 90,
    getCellValue: (program) => program.tags.map((item) => getArrayItem(item, "tags")).join(", "),
  },
  {
    field: "dimension",
    headerName: "Dimension",
    width: 90,
  },
  {
    field: "facilitators",
    headerName: "Facilitators",
    width: 90,
    getCellValue: (program) => program.facilitators.map((item) => getArrayItem(item, "facilitators")).join(", "),
  },
  {
    field: "levelOfCare",
    headerName: "Level of Cares",
    width: 90,
    getCellValue: (program) => program.levelOfCare.map((item) => getArrayItem(item, "levelOfCare")).join(", "),
  },
];

type Props = {
  data: IProgram[];
};
export const ProgramTable = ({ data }: Props) => {
  const navigate = useNavigate();

  const onRowClick = (program: IProgram) => {
    navigate(`/programs/${program.id}`);
  };

  return (
    <div style={{ height: 520, width: "100%" }}>
      <Table<IProgram> data={data} columns={columns} onRowClick={onRowClick} />
    </div>
  );
};
