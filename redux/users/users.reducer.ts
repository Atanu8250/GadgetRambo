import * as userTypes from "./users.type";

type reducerAction = {
  type: string;
  payload?: string;
};

const initAuthState = {
  users: [],
  loading: false,
  error: false,
};

export const usersReducer = (state = initAuthState, action: reducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case userTypes.USERS_LOADING: {
      return { ...state, loading: true, error: false };
    }

    case userTypes.USERS_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case userTypes.GET_USERS_SUCCESS: {
      return { loading: false, error: false, users: payload };
    }
    default: {
      return state;
    }
  }
};
