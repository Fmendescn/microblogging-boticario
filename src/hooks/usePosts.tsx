/* eslint-disable camelcase */
import { useCallback, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as FeedActions } from '../store/ducks/feed';

import useAuth from './useAuth';

interface IUser {
  _id: string;
  name: string;
  profile_picture?: string;
}

interface IMessage {
  content: string;
  created_at: string;
}

interface IPost {
  user: IUser;
  message: IMessage;
}

const posts: IPost[] = [
  {
    user: {
      _id: '0',
      name: 'Marina Lopes',
    },
    message: {
      content: 'Bom dia pessoal, como é q vcs tão?',
      created_at: '2021-04-05T14:48:00.000Z',
    },
  },
  {
    user: {
      _id: '1',
      name: 'Bruno Silva',
    },
    message: {
      content: 'Animado com a v0.64 do React Native, Hermes agora para iOS',
      created_at: '2021-05-04T14:48:00.000Z',
    },
  },
  {
    user: {
      _id: '2',
      name: 'Linus Torvalds',
    },
    message: {
      content:
        'Teoria e prática as vezes entram em conflito. E Quando isso acontece, a teoria perde, toda vez',
      created_at: '2021-05-05T14:48:00.000Z',
    },
  },
  // {
  //   user: {
  //     name: 'Fernanda Kelly',
  //   },
  //   message: {
  //     content: 'Bom dia pessoal, como é q vcs tão?',
  //     created_at: '2021-04-29T14:48:00.000Z',
  //   },
  // },
  // {
  //   user: {
  //     name: 'Marina Lopes',
  //   },
  //   message: {
  //     content: 'Bom dia pessoal, como é q vcs tão?',
  //     created_at: '2021-04-05T14:48:00.000Z',
  //   },
  // },
  // {
  //   user: {
  //     name: 'Bruno Silva',
  //   },
  //   message: {
  //     content: 'Animado com a v0.64 do React Native, Hermes agora para iOS',
  //     created_at: '2021-05-04T14:48:00.000Z',
  //   },
  // },
  // {
  //   user: {
  //     name: 'Helena Cruz',
  //   },
  //   message: {
  //     content: 'Bom dia pessoal, como é q vcs tão?',
  //     created_at: '2021-05-05T14:48:00.000Z',
  //   },
  // },
  // {
  //   user: {
  //     name: 'Fernanda Kelly',
  //   },
  //   message: {
  //     content: 'Bom dia pessoal, como é q vcs tão?',
  //     created_at: '2021-04-29T14:48:00.000Z',
  //   },
  // },
];

interface IUsePosts {
  postReaded: IPost;
  listPosts: IPost[];
  publicate(publicationText: string): void;
  readPost(postIndex: number): void;
  deletePost(postIndex: number): void;
  editPost(message: string): void;
}

function usePosts(): IUsePosts {
  const { navigate } = useNavigation();
  const { userStored } = useAuth();
  const dispatch = useDispatch();
  const listPosts = useSelector(state => state?.feed?.posts);
  const postReaded = useSelector(state => state?.feed.postReaded);
  const indexPostReaded = useSelector(state => state?.feed.indexReaded);

  useEffect(() => {
    dispatch(FeedActions.setPosts(posts));
  }, [dispatch]);

  const sortPosts = useCallback(() => {
    listPosts.sort((post: IPost) => {
      const dateToCompare = new Date(post?.message?.created_at);
      const today = new Date();
      return dateToCompare.getTime() - today.getTime();
    });
  }, [listPosts]);

  useEffect(() => {
    if (listPosts) {
      sortPosts();
    }
  }, [listPosts, sortPosts]);

  const publicate = useCallback(
    (publicationText: string) => {
      const content = {
        user: {
          _id: '100',
          name: userStored ?? 'Usuário',
        },
        message: {
          content: publicationText,
          created_at: new Date(),
        },
      };

      dispatch(FeedActions.addPost(content));
      navigate('Feed');
    },
    [dispatch, navigate, userStored],
  );

  const readPost = useCallback(
    (postIndex: number) => {
      dispatch(FeedActions.readPost(listPosts[postIndex], postIndex));
      navigate('CreatePost');
    },
    [dispatch, listPosts, navigate],
  );

  const deletePost = useCallback(
    (postIndex: number) => {
      const updatedPosts = [...listPosts];

      updatedPosts.splice(postIndex, 1);
      dispatch(FeedActions.setPosts(updatedPosts));
    },
    [dispatch, listPosts],
  );

  const editPost = useCallback(
    (message: string) => {
      const copyPosts = [...listPosts];
      const editedPost = { ...postReaded };

      editedPost.message = {
        content: message,
        created_at: new Date(),
      };
      if (indexPostReaded || indexPostReaded === 0) {
        copyPosts[indexPostReaded] = editedPost;

        dispatch(FeedActions.setPosts(copyPosts));
        dispatch(FeedActions.readPost(null, null));
        navigate('Feed');
      }
    },
    [dispatch, listPosts, postReaded, indexPostReaded, navigate],
  );

  return { listPosts, publicate, readPost, postReaded, deletePost, editPost };
}

export default usePosts;
