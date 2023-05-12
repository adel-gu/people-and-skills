export type Strength = {
  name: string;
  proficiency: string;
  weight: number;
  id: number;
};

export interface Person {
  name: string;
  professionalHeadline: string;
  picture: string;
  verified?: boolean;
}

export interface ProficiencyObj {
  [key: string]: Array<Strength>;
}

export interface PeopleState {
  person: Person;
  strengths: Array<Strength>;
  profiencies: ProficiencyObj;
  isPending: boolean;
  isRejected: boolean;
  error: string;
}
