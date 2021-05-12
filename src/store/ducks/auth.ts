import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  signIn: ['user'],
  signUp: ['user'],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  user: null,
  userRegistered: null,
};

const signIn = (state = INITIAL_STATE, action: any) => ({
  ...state,
  user: action.user,
});

const signUp = (state = INITIAL_STATE, action: any) => ({
  ...state,
  userRegistered: action.user,
});

/**
 * reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.SIGN_IN]: signIn,
  [Types.SIGN_UP]: signUp,
});
