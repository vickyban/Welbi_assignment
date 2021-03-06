import { createContext, useContext, useEffect } from "react";
import { useApi } from "../config/apiClient";
import { IResident } from "../entities.interface";

type ContextType = {
  residents: IResident[];
  residentDic?: Record<string, IResident>;
  loading: boolean;
  refetch: () => Promise<any>;
};
export const ResidentsContext = createContext<ContextType>({
  residents: [],
  loading: false,
  refetch: () => Promise.resolve(null),
});

export const ResidentsProvider: React.FC = ({ children }) => {
  const {
    call,
    data: residents,
    loading,
    normalizedData: residentDic,
    refetch,
  } = useApi<IResident[], IResident>({ initialData: [], shouldNormalizeResult: true });

  useEffect(() => {
    call({
      method: "get",
      url: "/residents",
    });
  }, [call]);

  return (
    <ResidentsContext.Provider
      value={{
        residents,
        residentDic,
        loading,
        refetch,
      }}
    >
      {children}
    </ResidentsContext.Provider>
  );
};

export const useResidentsContext = () => useContext(ResidentsContext);
