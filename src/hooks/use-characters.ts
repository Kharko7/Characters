import { useCallback, useEffect, useState } from "react";

import { Character } from "interface/Character";
import { getFromLocalStorage } from "utils/get-from-local-storage";
import { sortByName } from "utils/sort-by-name";
import { debounce } from "utils/debounce";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [inputValue, setInputValue] = useState<string>(getFromLocalStorage('characters'));
  const [debounceText, setDebounceText] = useState<string>(getFromLocalStorage('characters'));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedInputValue = useCallback(
    debounce((text: string) => {
      setDebounceText(text);
    }, 200), []);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${debounceText}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setCharacters([]);
          throw new Error(data.error);
        }
        const sortedCharacters: Character[] = data.results.sort(sortByName).slice(0, 8);

        setCharacters(sortedCharacters);
      }).catch((error) => console.log(error));
  }, [debounceText]);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setInputValue(value);
    memoizedInputValue(value.trim());
    localStorage.setItem('characters', value.trim());
  };

  return {
    characters,
    inputValue,
    handleChangeValue
  };
};