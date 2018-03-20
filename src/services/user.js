import request from '../utils/request';

export async function query() { //用户
  return request('/api/users');
}

export async function queryCurrent() {//当前用户
  return request('/api/currentUser');
}
