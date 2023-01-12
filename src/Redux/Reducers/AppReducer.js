import types from '../types';

const INITIAL_STATE = {
  loginKey: '',
  user: [],
  carData:[],
  colorList:[],
  makeList:[],
  carDetails:[],
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

      case types.CAR_DATA:
      return {
        ...state,
        carData: action.carData,
      };

      case types.MAKE_LIST:
      return {
        ...state,
        makeList: action.makeList,
      };

      case types.COLOR_LIST:
      return {
        ...state,
        colorList: action.colorList,
      };

      case types.CAR_DETAILS:
      return {
        ...state,
        carDetails: action.carDetails,
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
        carData:[],
        carDetails:[],
        selectedCategory,
      };

    default:
      return state;
  }
};
