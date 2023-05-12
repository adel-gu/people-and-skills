import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejectedWithValue,
  PayloadAction,
} from '@reduxjs/toolkit';

// [] fetch specific user with skills details

// API URL
const PERSON_SKILLS_URL = 'http://localhost:8080/api/';
const ALL_URL = 'http://localhost:8080/api/all/';

const GET_PEOPLE = 'get-people';
const GET_ALL_PEOPLE = 'get-all-people';

export const retrievePersonSkills = createAsyncThunk(
  GET_PEOPLE,
  async (userName: string | undefined) => {
    try {
      const res = await fetch(`${PERSON_SKILLS_URL}${userName}`);
      if (!res.ok) {
        throw new Error('User not found!');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error('Unable to fetch person with skills');
    }
  },
);

// export const retrievePoeples = createAsyncThunk(GET_ALL_PEOPLE, async () => {
//   const res = await fetch(`${ALL_URL}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: {
//         term: 'adelguitoun',
//       },
//     }),
//   });
//   const data = await res.json();
//   return data;
// });

export type Strength = {
  name: string;
  proficiency: string;
  weight: number;
};

export interface Person {
  name: string;
  professionalHeadline: string;
  picture: string;
  verified?: boolean;
}

interface ProficiencyObj {
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

const initialState: PeopleState = {
  person: {
    name: '',
    professionalHeadline: '',
    picture: '',
    verified: false,
  },
  strengths: [],
  profiencies: { '': [] },
  isPending: true,
  isRejected: false,
  error: '',
};

const collectSkillsByProfiency = (strengths: Array<Strength>) => {
  const profiencies: ProficiencyObj = {};
  strengths.map((strength) => {
    if (!profiencies.hasOwnProperty(strength.proficiency)) {
      profiencies[`${strength.proficiency}`] = [];
    }
    profiencies[`${strength.proficiency}`].push(strength);
  });
  return profiencies;
};

// Reducers
const peopleSlice = createSlice({
  name: 'personSkills',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      retrievePersonSkills.fulfilled,
      (state, action: PayloadAction<typeof initialState>) => {
        const { person, strengths } = action.payload;
        const { name, professionalHeadline, picture, verified } = person;
        state.person = { name, professionalHeadline, picture, verified };
        state.strengths = strengths.map((strength) => {
          return {
            name: strength.name,
            proficiency: strength.proficiency,
            weight: strength.weight,
          };
        });
        state.isPending = false;
        state.isRejected = false;
        state.profiencies = collectSkillsByProfiency(strengths);
      },
    );
    builder.addCase(retrievePersonSkills.pending, (state, action) => {
      state.isPending = true;
      state.isRejected = false;
    });

    builder.addCase(retrievePersonSkills.rejected, (state, action) => {
      state.isPending = false;
      state.isRejected = true;
      state.error = action.error.message!;
    });
  },
});

export default peopleSlice.reducer;
