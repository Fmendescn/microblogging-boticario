import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addPost: ['post'],
  setPosts: ['posts'],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  posts: [],
};

const addPost = (state = INITIAL_STATE, action: any) => {
  console.log('aqui');
  return {
    ...state,
    posts: [action.post, ...state.posts],
  };
};

const setPosts = (state = INITIAL_STATE, action: any) => ({
  posts: action.posts,
});

/**
 * reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_POST]: addPost,
  [Types.SET_POSTS]: setPosts,
});
