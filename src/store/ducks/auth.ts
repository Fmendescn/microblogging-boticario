import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  signIn: ['user'],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  user: null,
};

const signIn = (state = INITIAL_STATE, action: any) => ({
  user: action.user,
});

/**
 * reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.SIGN_IN]: signIn,
});
