import { Character } from "interface/Character";

export const sortByName = (a: Character, b: Character) => {
  const firstWord = a.name.toLowerCase();
  const secondWord = b.name.toLowerCase();

  if (firstWord > secondWord) {
    return 1;
  }
  if (firstWord < secondWord) {
    return -1;
  }
  return 0;
};