import { authAPI } from '../api';
import { putAccessToken } from '../../../helpers';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUser(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUser() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asyncRegister({ name, email, password }) {
  return async (dispatch) => {
    try {
      await authAPI.register({ name, email, password });
      alert('Berhasil melakukan pendaftaran! Silakan login.');
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    try {
      const response = await authAPI.login({ email, password });
      const { token, user } = response.data;
      
      putAccessToken(token);
      dispatch(setAuthUser(user));
      
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUser());
    localStorage.removeItem('accessToken');
  };
}

export {
  ActionType,
  setAuthUser,
  unsetAuthUser,
  asyncRegister,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};