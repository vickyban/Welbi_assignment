import { Box, CircularProgress, Typography, Paper, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledHeader } from "../../components/Header";
import { useProgramsContext } from "../../contexts/ProgramsContext";
import { ProgramTable } from "./ProgramTable";

const Programs = () => {
  const navigate = useNavigate();
  const { programs, loading } = useProgramsContext();

  const onAddProgram = () => navigate("/programs/new");
  return (
    <Box
      sx={{
        flex: 1,
        padding: 2,
        height: "100%",
        overflow: "auto",
        boxSizing: "content-box",
      }}
    >
      <StyledHeader>
        <Typography variant="h4" fontWeight="bold">
          Programs
        </Typography>
        <Button variant="contained" color="secondary" onClick={onAddProgram}>
          Add New Program
        </Button>
      </StyledHeader>

      <ProgramTable data={programs} />
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export const ProgamsIndex = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Programs />
      <Outlet />
    </Paper>
  );
};
