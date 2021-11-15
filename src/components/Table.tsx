import React, { useState } from "react";
import {
  Box,
  IconButton,
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableHead as MuiTableHead,
  TablePagination as MuiTablePagination,
  TableRow as MuiTableRow,
} from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

export type ColumnType<DataType> = {
  field: string;
  headerName: string;
  width?: number | "string";
  getCellValue?: (row: DataType) => any;
};

type PaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
};
const PaginationActions = ({ count, page, rowsPerPage, onPageChange }: PaginationActionsProps) => {
  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
};

const defaultGetCellValue = (data: any, fieldKey: string) => data[fieldKey];

type RowProps<DataType> = {
  data: DataType;
  columns: ColumnType<DataType>[];
  onRowClick?: () => void;
};
const TableRow = <DataType,>({ data, columns, onRowClick }: RowProps<DataType>) => {
  return (
    <MuiTableRow hover onClick={onRowClick}>
      {columns.map(({ field, getCellValue = defaultGetCellValue }) => (
        <MuiTableCell key={field}>{getCellValue(data, field)}</MuiTableCell>
      ))}
    </MuiTableRow>
  );
};

const defaultKeyExtractor = (data: any) => data.id;

type Props<DataType> = {
  data: DataType[];
  columns: ColumnType<DataType>[];
  keyExtractor?: (data: DataType) => string;
  onRowClick?: (data: DataType) => void;
};
export const Table = <DataType extends {}>({
  data,
  columns,
  keyExtractor = defaultKeyExtractor,
  onRowClick,
}: Props<DataType>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const pageRows = rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data;

  return (
    <div style={{ height: 520, width: "100%" }}>
      <MuiTablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={PaginationActions}
        component="div"
      />

      <MuiTable>
        <MuiTableHead>
          <MuiTableRow>
            {columns.map((column) => (
              <MuiTableCell key={column.headerName}>{column.headerName}</MuiTableCell>
            ))}
          </MuiTableRow>
        </MuiTableHead>
        <MuiTableBody>
          {pageRows.map((row) => (
            <TableRow
              key={keyExtractor(row)}
              data={row}
              columns={columns}
              onRowClick={onRowClick ? () => onRowClick(row) : undefined}
            />
          ))}
        </MuiTableBody>
      </MuiTable>
    </div>
  );
};
