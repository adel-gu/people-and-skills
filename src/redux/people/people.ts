import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PeopleState, ProficiencyObj, Strength } from '../../types/redux';

// API URL
const PERSON_SKILLS_URL = 'https://people-and-skills.onrender.com/api/bios/';

// Action
const GET_PERSON_SKILLS = 'get-person-skills';

export const retrievePersonSkills = createAsyncThunk(
  GET_PERSON_SKILLS,
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
            id: strength.id,
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
