import React, {
  useCallback,
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react';

import Snackbar from 'react-native-snackbar';

import {
  validateEmail,
  validatePassword,
  storeUserInfo,
  getUserInfo,
  deleteUserInfo,
} from '../../shared/utils';

interface AuthProviderProps {
  children: ReactNode;
}

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

const AuthContext = createContext<IUseAuth>({} as IUseAuth);

export function useAuth(): IUseAuth {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UserAuth requires an AuthProvider');
  }

  return context;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [userStored, setUserStored] = useState<string>('');
  const [isGettingUser, setIsGettingUser] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getStoredData() {
      const user = await getUserInfo();

      setUserStored(user ?? '');
      setIsGettingUser(false);
    }

    getStoredData();
  }, []);

  const signIn = useCallback((user: SignInProps) => {
    setIsLoading(true);

    setTimeout(() => {
      if (validateEmail(user.email) && validatePassword(user.password)) {
        storeUserInfo(user.email);
        setUserStored(user.email);
      } else {
        Snackbar.show({
          text: 'Email/Senha inválidos',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  const signOut = useCallback(async () => {
    await deleteUserInfo();

    setUserStored('');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        userStored,
        signInLoading: isLoading,
        isGettingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
