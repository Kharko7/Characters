import { useEffect, useState } from "react";

import { Character } from "interface/Character";

export const useCharacterById = (id: string | undefined) => {
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
        setCharacter(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return character;
};