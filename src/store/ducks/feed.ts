import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addPost: ['post'],
  setPosts: ['posts'],
  readPost: ['post', 'index'],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  posts: [],
  postReaded: null,
  indexReaded: null,
};

const addPost = (state = INITIAL_STATE, action: any) => {
  return {
    ...state,
    posts: [action.post, ...state.posts],
  };
};

const setPosts = (state = INITIAL_STATE, action: any) => ({
  ...state,
  posts: action.posts,
});

const readPost = (state = INITIAL_STATE, action: any) => {
  return {
    ...state,
    postReaded: action.post,
    indexReaded: action.index,
  };
};
/**
 * reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_POST]: addPost,
  [Types.SET_POSTS]: setPosts,
  [Types.READ_POST]: readPost,
});
