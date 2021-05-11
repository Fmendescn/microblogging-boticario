import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addNews: ['news'],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  news: [],
};

const addNews = (state = INITIAL_STATE, action: any) => ({
  news: action.news,
});

/**
 * reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_NEWS]: addNews,
});
