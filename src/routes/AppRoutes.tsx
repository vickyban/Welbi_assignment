import React from "react";
import { Route, Routes } from "react-router-dom";
import { ResidentsProvider } from "../contexts/ResidentContext";
import { Programs } from "./Programs/Programs";
import { CreateResident } from "./Resident/CreateResident";
import { Resident } from "./Resident/Resident";
import { ResidentsIndex } from "./Residents/Residents";

export const AppRoutes = () => {
  return (
    <ResidentsProvider>
      <Routes>
        <Route path="/residents" element={<ResidentsIndex />}>
          <Route path=":residentId" element={<Resident />} />
          <Route path="new" element={<CreateResident />} />
        </Route>
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </ResidentsProvider>
  );
};
