import axios, { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useReducer } from "react";
import { appHost } from "./appConstants";

export const apiClient = axios.create({
  baseURL: appHost,
  headers: {
    Authorization: "Bearer ce2d8882-92c3-4875-9a3b-c19bc63fc75c",
  },
});

// --- useApi hook ---

const defaultGetNormalizedKey = (item: any) => item.id;

const normalize = (data: any[], getKey: (data: any) => string) => {
  return data.reduce((acc, cur) => {
    const key = getKey(cur);
    acc[key] = cur;
    return acc;
  }, {});
};

enum ApiCallActionType {
  FETCH,
  REFETCH,
  RESOLVE,
  REJECT,
}

enum ApiCallStatus {
  IDLE,
  FETCHING,
  SUCCESS,
  ERROR,
}

interface ApiCallState {
  data: any;
  normalizedData?: Record<string, any>;
  activePromise?: Promise<any> | null;
  error?: string;
  status: ApiCallStatus;
  requestConfig?: AxiosRequestConfig;
  shouldNormalizeResult?: boolean;
  getNormalizedKey: (data: any) => string;
}

type ApiCallAction =
  | {
      type: ApiCallActionType.FETCH;
      payload: {
        requestConfig: AxiosRequestConfig;
        activePromise?: Promise<any>;
      };
    }
  | {
      type: ApiCallActionType.REFETCH;
    }
  | {
      type: ApiCallActionType.RESOLVE;
      payload: {
        data: any;
      };
    }
  | {
      type: ApiCallActionType.REJECT;
      payload: {
        error: any;
      };
    };

const apiCallReducer = (state: ApiCallState, action: ApiCallAction): ApiCallState => {
  const { type } = action;
  switch (type) {
    case ApiCallActionType.FETCH: {
      return {
        ...state,
        activePromise: action.payload.activePromise,
        requestConfig: action.payload.requestConfig,
        status: ApiCallStatus.FETCHING,
      };
    }
    case ApiCallActionType.REFETCH:
      return {
        ...state,
        status: ApiCallStatus.FETCHING,
      };
    case ApiCallActionType.RESOLVE: {
      return {
        ...state,
        activePromise: null,
        normalizedData: state.shouldNormalizeResult
          ? normalize(action.payload.data, state.getNormalizedKey)
          : state.normalizedData,
        data: action.payload.data,
        status: ApiCallStatus.SUCCESS,
      };
    }
    case ApiCallActionType.REJECT:
      return {
        ...state,
        activePromise: null,
        error: action.payload.error,
        status: ApiCallStatus.ERROR,
      };
    default:
      return state;
  }
};

interface UseApiHookOptions<DataType, NormalizedDataType> {
  initialData?: DataType;
  shouldNormalizeResult?: boolean;
  getNormalizedKey?: (item: NormalizedDataType) => string;
}

interface UseApiHookResult<DataType, NormalizedDataType> {
  data: DataType;
  normalizedData?: Record<string, NormalizedDataType>;
  loading: boolean;
  refetch: () => void;
  error?: string;
  call: (requestConfig: AxiosRequestConfig) => Promise<any>;
}
export const useApi = <DataType = any, NormalizedDataType = undefined>(
  options: UseApiHookOptions<DataType, NormalizedDataType> = {},
): UseApiHookResult<DataType, NormalizedDataType> => {
  const { initialData, shouldNormalizeResult, getNormalizedKey = defaultGetNormalizedKey } = options;

  const [state, dispatch] = useReducer(apiCallReducer, {
    data: initialData,
    status: ApiCallStatus.IDLE,
    shouldNormalizeResult,
    getNormalizedKey,
    normalizedData: shouldNormalizeResult
      ? normalize(initialData as unknown as NormalizedDataType[], getNormalizedKey)
      : undefined,
  });
  const { data, status, error, requestConfig, normalizedData, activePromise } = state;

  useEffect(() => {
    let promise = activePromise;
    if (requestConfig && status === ApiCallStatus.FETCHING && !promise) {
      promise = apiClient.request(requestConfig);
    }
    if (promise) {
      promise
        .then(({ data }) => {
          dispatch({
            type: ApiCallActionType.RESOLVE,
            payload: { data },
          });
        })
        .catch((error) => {
          dispatch({
            type: ApiCallActionType.REJECT,
            payload: { error },
          });
        });
    }
  }, [status, requestConfig, activePromise, dispatch]);

  const call = useCallback(
    (requestConfig: AxiosRequestConfig) => {
      const promise = apiClient.request(requestConfig);
      dispatch({ type: ApiCallActionType.FETCH, payload: { requestConfig, activePromise: promise } });
      return promise;
    },
    [dispatch],
  );

  const refetch = useCallback(() => dispatch({ type: ApiCallActionType.REFETCH }), [dispatch]);

  return {
    data,
    loading: status === ApiCallStatus.FETCHING,
    refetch,
    call,
    error,
    normalizedData,
  };
};
