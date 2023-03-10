import { Character } from "interface/Character";

export const filterArrayByName = (array: Character[], value: string) => {
  return array.filter((character) => {
    const typedValue = value.toLowerCase();
    const characterName = character.name.toLowerCase();

    return characterName.includes(typedValue);
  });
};