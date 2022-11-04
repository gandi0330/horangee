import {createSlice} from '@reduxjs/toolkit';

export interface missionType {
  file: string;
  txt: string;
}

export const mainMissionInitialState: missionType | null = {
  file: '',
  txt: '',
};

export const mainMissionSlice = createSlice({
  name: 'mainMission',
  initialState: mainMissionInitialState,
  reducers: {
    // setfile(state: null, actions: {type: string; payload: any}) {
    //   return actions.payload;
    // },
    setFile: (state, action) => {
      state.file = action.payload.file;
      //   state.txt = action.payload.txt;
    },
  },
});

export const selectMainFile = (state: {mainMission: {file: string}}) =>
  state.mainMission.file;
export const {setFile} = mainMissionSlice.actions;

export default mainMissionSlice.reducer;
