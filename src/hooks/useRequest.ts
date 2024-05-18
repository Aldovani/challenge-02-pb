import { useCallback, useEffect, useState } from "react";

interface useRequestProps {
  fcRequest(params?: unknown): Promise<unknown>;
  currentPage: number;
}

export function useRequest<T>({ fcRequest,currentPage}: useRequestProps) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const requestCallback = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fcRequest();
      setData(data as T);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    requestCallback();
  }, [requestCallback]);

  return {
    data,
    isLoading,
    error,
  };
}
