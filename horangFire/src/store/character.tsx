import {createSlice} from '@reduxjs/toolkit';

export interface charType {
  id: number;
  user_id: string;
  character_id: number;
  created_date: string;
  nickname: string;
  characterLevel: string;
  status: boolean;
}

export const charInitialState: charType | null = null;

export const charSlice = createSlice({
  name: 'character',
  initialState: charInitialState,
  reducers: {
    setMyCharacter: (state: charType | null, action) => {
      state = action.payload;
    },
    setTodaysMission: (state: charType | null, action) => {
      if (state) {
        state.status = action.payload.isDone;
      }
    },
  },
});

export const checkTodaysMission = (state: {character: {status: boolean}}) =>
  state.character.status;
export const selectName = (state: {character: {nickname: string}}) =>
  state.character.nickname;
export const selectCharacter = (state: {character: charType | null}) =>
  state.character;

export const {setMyCharacter, setTodaysMission} = charSlice.actions;

export default charSlice.reducer;
