import { useEffect } from "react";
import { useApi } from "../../config/apiClient";
import { mockPrograms } from "../../config/mockPrograms";
import { IProgram } from "../../entities.interface";
import { ProgramTable } from "./ProgramTable";

export const Programs = () => {
  const { call, data, loading } = useApi<IProgram[]>({ initialData: [] });

  useEffect(() => {
    call({
      method: "get",
      url: "/programs",
    });
  }, [call]);

  return (
    <div>
      <ProgramTable data={mockPrograms} />
    </div>
  );
};
