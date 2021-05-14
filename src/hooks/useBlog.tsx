/* eslint-disable camelcase */
import { useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as BlogActions } from '../store/ducks/blog';

interface IUser {
  name: string;
  profile_picture?: string;
}

interface IMessage {
  content: string;
  created_at: string;
}

interface INews {
  user: IUser;
  message: IMessage;
}

interface IUseBlog {
  isLoading: boolean;
  newsList: INews[];
}

function useBlog(): IUseBlog {
  const dispatch = useDispatch();
  const newsList = useSelector(state => state?.blog?.news);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('https://gb-mobile-app-teste.s3.amazonaws.com/data.json')
      .then(response => {
        dispatch(BlogActions.addNews(response?.data?.news));
        setIsLoading(false);
      })
      .catch(error => setIsLoading(false));
  }, [dispatch]);

  return { newsList, isLoading };
}

export default useBlog;
