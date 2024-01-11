import {createAction, props} from '@ngrx/store';

export const loginSuccess = createAction('[Auth-API] Login Success');
export const checkLoginStatus = createAction(
  '[Auth-API] Check Login Status',
  props<{ user: any }>(),
);

export const loginUser = createAction(
  '[Auth-API] Login User',
  props<{ user: any }>(),
);

export const loginFailure = createAction(
  '[Auth-API] Login Failure',
  props<{ error: any }>(),
);

export const loginRedirect = createAction('[Auth-API] Login Redirect');
