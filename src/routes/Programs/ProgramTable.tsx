import { IProgram } from "../../entities.interface";

import { ColumnType, Table } from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";

const DATETIME_FORMAT = "MM/dd/yyyy, p";

const getArrayItem = (item: any, key?: string) => {
  if (item instanceof Object && key) {
    return item[key];
  }
  return item;
};

const columns: ColumnType<IProgram>[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "location", headerName: "Location" },
  {
    field: "start",
    headerName: "Start Date",
    getCellValue: (program) => format(parseISO(program.start), DATETIME_FORMAT),
  },
  {
    field: "end",
    headerName: "End Date",
    getCellValue: (program) => format(parseISO(program.end), DATETIME_FORMAT),
  },
  {
    field: "tags",
    headerName: "Tags",
    getCellValue: (program) => program.tags.map((item) => getArrayItem(item, "tags")).join(", "),
  },
  {
    field: "dimension",
    headerName: "Dimension",
  },
  {
    field: "facilitators",
    headerName: "Facilitators",
    getCellValue: (program) => program.facilitators.map((item) => getArrayItem(item, "facilitators")).join(", "),
  },
  {
    field: "levelOfCare",
    headerName: "Level of Cares",
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
