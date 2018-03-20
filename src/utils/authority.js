// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {//获取权限
  return localStorage.getItem('antd-pro-authority') || 'admin';
}

export function setAuthority(authority) { //设置权限
  return localStorage.setItem('antd-pro-authority', authority);
}
