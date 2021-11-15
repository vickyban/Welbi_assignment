import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProgramsProvider } from "../contexts/ProgramsContext";
import { ResidentsProvider } from "../contexts/ResidentsContext";
import { CreateProgram } from "./Program/CreateProgram";
import { Program } from "./Program/Program";
import { ProgamsIndex } from "./Programs/Programs";
import { CreateResident } from "./Resident/CreateResident";
import { Resident } from "./Resident/Resident";
import { ResidentsIndex } from "./Residents/Residents";

export const AppRoutes = () => {
  return (
    <ProgramsProvider>
      <ResidentsProvider>
        <Routes>
          <Route path="/residents" element={<ResidentsIndex />}>
            <Route path=":residentId" element={<Resident />} />
            <Route path="new" element={<CreateResident />} />
          </Route>
          <Route path="/programs" element={<ProgamsIndex />}>
            <Route path=":programId" element={<Program />} />
            <Route path="new" element={<CreateProgram />} />
          </Route>
        </Routes>
      </ResidentsProvider>
    </ProgramsProvider>
  );
};
