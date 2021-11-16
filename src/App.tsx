import "./App.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { ResidentsProvider } from "./contexts/ResidentsContext";
import { ProgramsProvider } from "./contexts/ProgramsContext";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
        <ProgramsProvider>
          <ResidentsProvider>
            <AppRoutes />
          </ResidentsProvider>
        </ProgramsProvider>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
