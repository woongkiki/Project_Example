import React from 'react';
import UserApi from '../api/UserApi';
export const MEBMER_LOGIN = 'user/MEBMER_LOGIN';
export const MEMBER_INFO = 'user/MEMBER_INFO';
export const MEMBER_JOIN = 'user/MEMBER_JOIN';
export const WISH_LIST = 'user/WISH_LIST';
export const MEMBER_LOGOUT = 'user/MEMBER_LOGOUT';

export const actionCreators = {
  //회원 로그인
  member_login: user => async dispatch => {
    try {
      const response = await UserApi.member_login(user);
      //console.log('member_login ::: ', response);

      if (response.result) {
        await dispatch({
          type: MEBMER_LOGIN,
          payload: response.data,
        });

        return {
          state: true,
          result: response.data,
          msg: response.msg,
          //pwds : response.data.mb_password
        };
      } else {
        await dispatch({
          type: MEBMER_LOGIN,
          payload: null,
        });
        return {state: false, msg: response.msg, ids: ''};
      }
    } catch (error) {
      return {state: false, msg: error, ids: ''};
    }
  },
  //회원 정보확인
  member_info: user => async dispatch => {
    try {
      const response = await UserApi.member_info(user);
      //       console.log('member_info ::: ', response);

      if (response.result) {
        await dispatch({
          type: MEBMER_LOGIN,
          payload: response.data,
        });
        return {state: true, result: response.data, msg: response.msg};
      } else {
        await dispatch({
          type: MEBMER_LOGIN,
          payload: null,
        });
        return {state: false, msg: response.msg, nick: ''};
      }
    } catch (error) {
      return {state: false, msg: '', nick: ''};
    }
  },

  //회원가입
  member_join: user => async dispatch => {
    try {
      const response = await UserApi.member_join(user);
      // console.log('member_join ::: ', response);

      if (response.result) {
        await dispatch({
          type: MEMBER_JOIN,
          payload: response.data,
        });
        return {state: true, msg: response.msg};
      } else {
        await dispatch({
          type: MEMBER_JOIN,
          payload: null,
        });
        return {state: false, msg: response.msg};
      }
    } catch (error) {
      // console.log('member_join Error : ', error);
      return {state: false, msg: response.msg, nick: ''};
    }
  },

  //관심목록 리스트
  wish_list: (data, count, type) => async dispatch => {
    try {
      const response = await UserApi.wish_list(data);
      console.log('wish_list :::: ', data);
      if (response.result) {
        await dispatch({
          type: WISH_LIST,
          payload: response.data,
          count: count,
        });
        return {state: true};
      } else {
        return {state: false, msg: response.msg};
      }
    } catch (error) {
      // console.log('wish_list Error : ', error);
      return {state: false, msg: ''};
    }
  },
  //회원 정보 변경
  member_update: user => async dispatch => {
    try {
      const response = await UserApi.member_update(user);
      // console.log('member_update ::', response);
      return response;
    } catch (error) {
      console.log('member_info Error : ', error);
      return {result: false};
    }
  },
  //로그아웃
  member_logout: data => async dispatch => {
    try {
      const response = await UserApi.member_logout(data);

      await dispatch({
        type: MEMBER_LOGOUT,
      });
      return response;
    } catch (error) {
      // console.log('member_logout Error : ', error);
      return {state: false, msg: ''};
    }
  },
  //탈퇴하기
  member_out: data => async dispatch => {
    try {
      const response = await UserApi.member_out(data);

      await dispatch({
        type: MEMBER_LOGOUT,
      });
      return response;
    } catch (error) {
      // console.log('member_out Error : ', error);
      return {state: false, msg: ''};
    }
  },
};
