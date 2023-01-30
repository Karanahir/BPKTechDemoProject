import Constant from '../Helper/Constant';

export const isLogin = value => ({
  type: Constant.isLogin,
  payload: value,
});

export const routeCall = routeName => ({
  type: 'Initial_Route',
  payload: routeName,
});
