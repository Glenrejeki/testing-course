import { userAPI } from '../api';

const ActionType = {
  SET_USERS: 'SET_USERS',
  SET_PROFILE: 'SET_PROFILE',
};

function setUsers(users) {
  return {
    type: ActionType.SET_USERS,
    payload: {
      users,
    },
  };
}

function setProfile(profile) {
  return {
    type: ActionType.SET_PROFILE,
    payload: {
      profile,
    },
  };
}

function asyncGetAllUsers() {
  return async (dispatch) => {
    try {
      const data = await userAPI.getAllUsers();
      dispatch(setUsers(data.users));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncGetProfile() {
  return async (dispatch) => {
    try {
      const data = await userAPI.getProfile();
      dispatch(setProfile(data.user));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpdateProfile({ name, email }) {
  return async (dispatch) => {
    try {
      const data = await userAPI.updateProfile({ name, email });
      dispatch(setProfile(data.user));
      alert('Berhasil mengubah profile!');
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncChangePhotoProfile(photo) {
  return async (dispatch) => {
    try {
      await userAPI.changePhotoProfile(photo);
      await dispatch(asyncGetProfile());
      alert('Berhasil mengubah foto profile!');
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncChangePassword({ password, new_password }) {
  return async () => {
    try {
      await userAPI.changePassword({ password, new_password });
      alert('Berhasil mengubah password!');
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

export {
  ActionType,
  setUsers,
  setProfile,
  asyncGetAllUsers,
  asyncGetProfile,
  asyncUpdateProfile,
  asyncChangePhotoProfile,
  asyncChangePassword,
};