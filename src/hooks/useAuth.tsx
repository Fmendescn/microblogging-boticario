import { useCallback, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Snackbar from 'react-native-snackbar';
import { Creators as AuthActions } from '../store/ducks/auth';

import {
  validateEmail,
  validatePassword,
  storeUserInfo,
  getUserInfo,
  deleteUserInfo,
} from '../shared/utils';

interface SignInProps {
  email: string;
  password: string;
}

interface IUseAuth {
  signInLoading: boolean;
  userStored: string;
  isGettingUser: boolean;
  signIn(user: SignInProps): void;
  signOut(): void;
}

const useAuth = (): IUseAuth => {
  const [isGettingUser, setIsGettingUser] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const userInfo = useSelector(state => state?.auth?.user);

  // console.log(userInfo);
  useEffect(() => {
    async function getStoredData() {
      const user = await getUserInfo();

      dispatch(AuthActions.signIn(user));
      setIsGettingUser(false);
    }

    getStoredData();
  }, [dispatch]);

  const signIn = useCallback(
    (user: SignInProps) => {
      setIsLoading(true);

      setTimeout(() => {
        if (validateEmail(user.email) && validatePassword(user.password)) {
          storeUserInfo(user.email);
          dispatch(AuthActions.signIn(user.email));
        } else {
          Snackbar.show({
            text: 'Email/Senha inválidos',
            duration: Snackbar.LENGTH_SHORT,
          });
        }
        setIsLoading(false);
      }, 1000);
    },
    [dispatch],
  );

  const signOut = useCallback(async () => {
    await deleteUserInfo();
    dispatch(AuthActions.signIn(null));
  }, [dispatch]);

  return {
    signIn,
    signOut,
    userStored: userInfo,
    signInLoading: isLoading,
    isGettingUser,
  };
};

export default useAuth;
