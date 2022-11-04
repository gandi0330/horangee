import {configureStore, createSlice} from '@reduxjs/toolkit';
// import {composeWithDevTools} from '@reduxjs/toolkit/dist/devtoolsExtension';
import missionReducer from './mission';

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
    mission: missionReducer,
  },
});

export const userObjectActions = userObjectSlice.actions;
export default store;
