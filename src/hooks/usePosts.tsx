/* eslint-disable camelcase */
import { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Creators as FeedActions } from '../store/ducks/feed';

interface IUser {
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
      name: 'Marina Lopes',
    },
    message: {
      content: 'Bom dia pessoal, como é q vcs tão?',
      created_at: '2021-04-05T14:48:00.000Z',
    },
  },
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
  //     name: 'Linus Torvalds',
  //   },
  //   message: {
  //     content:
  //       'Teoria e prática as vezes entram em conflito. E Quando isso acontece, a teoria perde, toda vez',
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
  listPosts: IPost[];
  publicate(publicationText: string): void;
}

function usePosts(): IUsePosts {
  const dispatch = useDispatch();
  const listPosts = useSelector(state => state?.feed?.posts);

  useEffect(() => {
    dispatch(FeedActions.setPosts(posts));
  }, [dispatch]);

  const publicate = useCallback(
    (publicationText: string) => {
      const content = {
        user: {
          name: 'Francisco',
        },
        message: {
          content: publicationText,
          created_at: '2021-05-11T14:48:00.000Z',
        },
      };
      dispatch(FeedActions.addPost(content));
    },
    [dispatch],
  );

  return { listPosts, publicate };
}

export default usePosts;
