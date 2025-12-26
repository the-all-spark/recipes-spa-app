import { useDispatch, useSelector } from 'react-redux';

import { authApi, useLoginUserMutation } from '@/app/api/authApi';
import { setCredentials, logout } from '@/features/auth/authSlice';
import { RootState } from '@/app/store';
import { LoginUserRequest } from '@/types/UserAuth';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isAuthenticated } = useSelector((state: RootState) => state.auth);

  // RTK mutation to send a request to the API
  const [loginUser] = useLoginUserMutation();
  const login = async (credentials: LoginUserRequest) => {
    const response = await loginUser(credentials).unwrap();
    dispatch(setCredentials(response));
    return response;
  };

  // To clear data and RTK Query cache on logout
  const handleLogout = () => {
    dispatch(logout());
    dispatch(authApi.util.resetApiState());
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout: handleLogout,
  };
};
