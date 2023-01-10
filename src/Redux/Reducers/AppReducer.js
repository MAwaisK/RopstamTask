import types from '../types';

const INITIAL_STATE = {
  loginKey: '',
  user: [],
  selectedCategory: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_KEY:
      return {
        ...state,
        loginKey: action.loginKey,
      };

    case types.USER:
      return {
        ...state,
        user: action.user,
      };

    case types.SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.selectedCategory,
      };

    case types.REVERT_APP:
      return {
        ...state,
        loginKey: '',
        user: [],
        selectedCategory,
      };

    default:
      return state;
  }
};
