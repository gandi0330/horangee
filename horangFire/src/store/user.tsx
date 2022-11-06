import {createSlice} from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  reportCnt: number;
  point: number;
  role: string;
}

export const userInitialState: User | null = {
  id: '',
  name: '',
  reportCnt: 0,
  point: 0,
  role: '',
};

// state
export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    //mutations
    setUserObject: (state, action) => {
      return action.payload.user;
    },
    reset: state => {
      Object.assign(state, userInitialState);
    },
  },
});

// getters -> Login.tsx 가서 확인
export const selectUser = (state: {user: User}) => state.user;
export const {setUserObject, reset} = userSlice.actions;

export default userSlice.reducer;
