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

interface SignUpProps extends SignInProps {
  name: string;
}

interface IUseAuth {
  isLoading: boolean;
  userStored: string;
  isGettingUser: boolean;
  userIsRegistered: boolean;
  signIn(user: SignInProps): void;
  signOut(): void;
  signUp(register: SignUpProps): void;
}

const useAuth = (): IUseAuth => {
  const [isGettingUser, setIsGettingUser] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const userInfo = useSelector(state => state?.auth?.user);
  const registerInfo = useSelector(state => state?.auth?.userRegistered);

  useEffect(() => {
    async function getStoredData() {
      const user = await getUserInfo();

      dispatch(AuthActions.signIn(user));
      setIsGettingUser(false);
    }

    getStoredData();
  }, [dispatch]);

  const authenticateUser = useCallback(
    (user: SignInProps) => {
      if (
        user?.email === registerInfo?.email &&
        user?.password === registerInfo?.password
      ) {
        dispatch(AuthActions.signIn(registerInfo?.name));
        storeUserInfo(registerInfo?.name);
      } else {
        Snackbar.show({
          text: 'Email/Senha inválidos',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    },
    [registerInfo, dispatch],
  );

  const signIn = useCallback(
    (user: SignInProps) => {
      setIsLoading(true);

      setTimeout(() => {
        authenticateUser(user);
        setIsLoading(false);
      }, 1000);
    },
    [authenticateUser],
  );

  const signUp = useCallback(
    (register: SignUpProps) => {
      setIsLoading(true);

      setTimeout(() => {
        if (
          validateEmail(register?.email) &&
          validatePassword(register?.password) &&
          register?.name.length >= 0
        ) {
          dispatch(AuthActions.signUp(register));

          Snackbar.show({
            text: 'Cadastro realizado com sucesso, logue na sua conta',
            duration: Snackbar.LENGTH_SHORT,
          });
        } else {
          Snackbar.show({
            text: 'Dados inválidos',
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
    signUp,
    userStored: userInfo,
    isLoading,
    userIsRegistered: !!registerInfo,
    isGettingUser,
  };
};

export default useAuth;
