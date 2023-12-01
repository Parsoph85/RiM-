import { fetchCharacters } from "../../api";
import { useState, useEffect } from "react";

export const useCharacters = (ids) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCharacters(ids).then((data) => {
      console.log(data);
      if (data.length) {
      setCharacters(data);
      } else { setCharacters ([data]) }
      setIsLoading(false);
    });
  }, [ids]);

  return { characters, isLoading };
};
