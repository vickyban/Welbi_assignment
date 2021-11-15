import { createContext, useContext, useEffect } from "react";
import { useApi } from "../config/apiClient";
import { IProgram } from "../entities.interface";

type ContextType = {
  programs: IProgram[];
  programDic?: Record<string, IProgram>;
  loading: boolean;
  refetch: () => Promise<any>;
};
export const ProgramsContext = createContext<ContextType>({
  programs: [],
  loading: false,
  refetch: () => Promise.resolve(null),
});

export const ProgramsProvider: React.FC = ({ children }) => {
  const {
    call,
    data: programs,
    loading,
    normalizedData: programDic,
    refetch,
  } = useApi<IProgram[], IProgram>({ initialData: [], shouldNormalizeResult: true });

  useEffect(() => {
    call({
      method: "get",
      url: "/programs",
    });
  }, [call]);

  return (
    <ProgramsContext.Provider
      value={{
        programs,
        programDic,
        loading,
        refetch,
      }}
    >
      {children}
    </ProgramsContext.Provider>
  );
};

export const useProgramsContext = () => useContext(ProgramsContext);
