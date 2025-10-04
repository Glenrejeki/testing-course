// src/features/users/states/reducer.js

// ============================
// STATE USERS
// ============================
const initialUsersState = {
  list: [],      // daftar semua user
  loading: false,
  error: null,
};

// Reducer untuk daftar semua user
export function usersReducer(state = initialUsersState, action) {
  switch (action.type) {
    case "users/fetchStart":
      return { ...state, loading: true, error: null };
    case "users/fetchSuccess":
      return { ...state, loading: false, list: action.payload };
    case "users/fetchError":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// ============================
// STATE PROFILE
// ============================
const initialProfileState = {
  data: null,    // detail profil user login
  loading: false,
  error: null,
};

// Reducer untuk profil user
export function profileReducer(state = initialProfileState, action) {
  switch (action.type) {
    case "profile/fetchStart":
      return { ...state, loading: true, error: null };
    case "profile/fetchSuccess":
      return { ...state, loading: false, data: action.payload };
    case "profile/fetchError":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
