import { Box, CircularProgress, Typography, Paper, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledHeader } from "../../components/Header";
import { useResidentsContext } from "../../contexts/ResidentsContext";
import { ResidentTable } from "./ResidentTable";

const Residents = () => {
  const navigate = useNavigate();
  const { residents, loading } = useResidentsContext();

  const onAddResident = () => navigate("/residents/new");
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
          Residents
        </Typography>
        <Button variant="contained" color="secondary" onClick={onAddResident}>
          Add New Resident
        </Button>
      </StyledHeader>

      <ResidentTable data={residents} />
      {loading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export const ResidentsIndex = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Residents />
      <Outlet />
    </Paper>
  );
};
