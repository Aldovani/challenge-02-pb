import { Plants } from "../../types/Plants";
import { plantsService } from "../../services/impls/plants";
import { useRequest } from "../../hooks/useRequest";
import { Pagination } from "../../services/IPlants";
import { useEffect, useState } from "react";
import { delay } from "../../utils/delay";

export function useProductList() {
  const [plants, setPlants] = useState<Plants[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useRequest<Pagination<Plants[]>>({
    fcRequest: async () => {
      await delay(2500);
      return plantsService.getAll({ page: currentPage });
    },
    currentPage: currentPage,
  });

  useEffect(() => {
    if (!data?.data) return;
    setPlants((prev) => [...prev, ...data.data]);
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver( (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((prev) => {
          if (prev === data?.last) return prev;

          return prev + 1;
        });
      }
    });

    observer.observe(document.getElementById("end-of-page")!);

    return () => observer.disconnect();
  }, [data?.last, isLoading]);

  return {
    plants,
    error,
    isLoading,
  };
}
