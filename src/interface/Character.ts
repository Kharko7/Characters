export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Origin;
  species: string;
  status: string;
  type: string;
}

interface Location {
  name: string;
  url: string;
}
interface Origin {
  name: string;
  url: string;
}