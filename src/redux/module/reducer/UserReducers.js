import {
  MEMBER_LOGOUT,
  MEBMER_LOGIN,
  MEMBER_INFO,
  MEMBER_JOIN,
  WISH_LIST,
} from '../action/UserAction.js';
const initialState = {
  userInfo: null, // user
  user_wish_list: [], // 회원 관신목록 리스트
};

export default (
  state = initialState,
  {type, payload, code = '', count = 1},
) => {
  switch (type) {
    case MEBMER_LOGIN:
      return {
        ...state,
        userInfo: payload,
      };
    case MEMBER_INFO:
      return {
        ...state,
        userInfo: payload,
      };
    case MEMBER_JOIN:
      return {
        ...state,
        userInfoRegister: payload,
      };

    case WISH_LIST:
      let user_wish_list = '';
      if (count > 1) {
        user_wish_list =
          payload.length !== 0
            ? state.user_wish_list.concat(payload)
            : state.user_wish_list;
      } else {
        user_wish_list = payload;
      }
      return {
        ...state,
        user_wish_list: user_wish_list,
      };
    case MEMBER_LOGOUT:
      return {
        userInfo: null, // user
      };
    default:
      return state;
  }
};
