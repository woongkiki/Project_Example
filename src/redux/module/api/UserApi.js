import {BASE_URL} from '../../../util/APIConstant';
import ApiManager from '../../../util/ApiManager';
const $http = new ApiManager();
export default {
  //회원 로그인
  member_login: async data => {
    const url = `${BASE_URL}/adm/api/`;
    //method : member_sendSms
    return await $http.multipart(url, data);
  },
  //회원 정보 확인
  member_info: async data => {
    const url = `${BASE_URL}/adm/api/`;
    //method : member_info
    return await $http.multipart(url, data);
  },
  member_join: async data => {
    const url = `${BASE_URL}/adm/api/`;
    //method : member_join
    return await $http.multipart(url, data);
  },
  //관심목록 리스트
  wish_list: async data => {
    const url = `${BASE_URL}/adm/api/`;
    //method : wish_list
    return await $http.multipart(url, data);
  },
  //회원정보 변경
  member_update: async data => {
    const url = `${BASE_URL}/adm/api/`;
    //method : member_update
    return await $http.multipart(url, data);
  },
  //로그아웃
  member_logout: async data => {
    const url = `${BASE_URL}/adm/api/`;
    //method : member_logout
    return await $http.multipart(url, data);
  },
  //탈퇴하기
  member_out: async data => {
    const url = `${BASE_URL}/adm/api/`;
    //method : member_out
    return await $http.multipart(url, data);
  },
};
