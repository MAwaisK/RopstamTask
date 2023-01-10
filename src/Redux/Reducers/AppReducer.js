import types from '../types';

const INITIAL_STATE = {
  loginKey: '',
  user: [],
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

    case types.REVERT_APP:
      return {
        ...state,
        loginKey: '',
        user: [],
      };

    default:
      return state;
  }
};