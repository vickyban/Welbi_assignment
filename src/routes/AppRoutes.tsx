import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { CreateProgram } from "./Program/CreateProgram";
import { Program } from "./Program/Program";
import { ProgamsIndex } from "./Programs/Programs";
import { CreateResident } from "./Resident/CreateResident";
import { Resident } from "./Resident/Resident";
import { ResidentsIndex } from "./Residents/Residents";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/residents" element={<ResidentsIndex />}>
          <Route path=":residentId" element={<Resident />} />
          <Route path="new" element={<CreateResident />} />
        </Route>
        <Route path="/programs" element={<ProgamsIndex />}>
          <Route path=":programId" element={<Program />} />
          <Route path="new" element={<CreateProgram />} />
        </Route>
      </Route>
    </Routes>
  );
};
