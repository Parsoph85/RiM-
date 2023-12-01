import { fetchLocations } from "../../api";
import { useState, useEffect } from "react";

export const useLocations = (ids) => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchLocations(ids).then((data) => {
      console.log(data);
      setLocations(data);
      setIsLoading(false);
    });
  }, [ids]);

  return { locations, isLoading };
};
