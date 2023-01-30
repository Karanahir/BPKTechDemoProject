import Constant from '../Helper/Constant';

const initial = {
  isLogin: false,
  initalRoute: '',
};

export const Reducer = (state = initial, action) => {
  switch (action.type) {
    case Constant.isLogin:
      return {
        ...state,
        isLogin: action.payload,
      };

    case 'Initial_Route':
      return {
        ...state,
        initalRoute: action.payload,
      };

    default:
      return state;
  }
};
