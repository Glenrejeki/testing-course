// src/features/auth/states/reducer.js

// ============================
// STATE AUTH
// ============================
const initialAuthState = {
  user: null,       // data user setelah login/register
  token: null,      // JWT token
  loading: false,
  error: null,
};

// Reducer utama untuk auth
function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case "auth/loginStart":
    case "auth/registerStart":
      return { ...state, loading: true, error: null };

    case "auth/loginSuccess":
    case "auth/registerSuccess":
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "auth/loginError":
    case "auth/registerError":
      return { ...state, loading: false, error: action.payload };

    case "auth/logout":
      return { ...initialAuthState };

    default:
      return state;
  }
}

// 🔹 Export default agar bisa di-import langsung di stores.js
export default authReducer;
