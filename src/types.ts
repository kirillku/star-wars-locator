export interface Point {
  lat: number;
  long: number;
}
export interface MemberPoint extends Point {
  id: number;
}

export interface DistanceMemberPoint extends MemberPoint {
  distance: number;
}

export interface PointInfo {
  id: number;
  name: string;
  height: number;
  mass: number;
  gender: string;
  homeworld: string;
  wiki: string;
  image: string;
  born: number;
  died: number;
  diedLocation: string;
  species: string;
  hairColor: string;
  eyeColor: string;
  skinColor: string;
  cybernetics: string;
  affiliations: string[];
  masters: string[];
  apprentices: string[];
  formerAffiliations: string[];
}
