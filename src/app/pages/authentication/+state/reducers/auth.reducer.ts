import {createReducer, on} from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import {LoginApiActions} from '../actions';

export const statusFeatureKey = 'status';

export interface State {
  user: any | null;
  loginStatus: boolean;
}

export const initialState: State = {
  user: null,
  loginStatus: false,
};

export const reducer = createReducer(
  initialState,
  on(LoginApiActions.loginUser, (state, { user }) => ({
    ...state,
    user,
    loginStatus: true,
  })),

  on(AuthActions.logout, () => initialState),
  // on(AuthActions.loadAuths, state => state),
  // on(AuthActions.loadAuthsSuccess, (state, action) => state),
  // on(AuthActions.loadAuthsFailure, (state, action) => state),
);

export const getUser = (state: State) => state.user;
export const getUserLoginStatus = (state: State) => state.loginStatus;
