import {configureStore, createSlice} from '@reduxjs/toolkit';
// import {composeWithDevTools} from '@reduxjs/toolkit/dist/devtoolsExtension';
import mainMissionReducer from './mission';

const authInitialState = null; /** user type */

const userObjectSlice = createSlice({
  name: 'userObject',
  initialState: authInitialState,
  reducers: {
    login(state: null, actions: {type: string; payload: any}) {
      return actions.payload;
    },
    logout() {
      return null;
    },
  },
});

const store = configureStore({
  reducer: {
    userObject: userObjectSlice.reducer,
    mainMission: mainMissionReducer,
  },
});

export const userObjectActions = userObjectSlice.actions;
// export const {setFile} = mainMissionSlice.actions;
export default store;
