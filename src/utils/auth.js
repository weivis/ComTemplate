const USER_DATA_KEY = {
  Username: "localStorageUserName",
  Token: "localStorageUserToken"
}

export function getuser() {
  console.log("[auth.js]获取用户信息")
  if (window.localStorage.getItem(USER_DATA_KEY.Token)){
    return {
      Username: window.localStorage.getItem(USER_DATA_KEY.Username),
      Token: window.localStorage.getItem(USER_DATA_KEY.Token),
    }
  }else{
    return {
      Username:null,
      Token:null,
    }
  }

}

export function uploadusername(Username){
  window.localStorage.removeItem(USER_DATA_KEY.Username)
  window.localStorage.setItem(USER_DATA_KEY.Username, Username)
}

export function signin(token, Username) {
  console.log("[auth.js]成功记录用户信息")
  window.localStorage.setItem(USER_DATA_KEY.Token, token)
  window.localStorage.setItem(USER_DATA_KEY.Username, Username)
  return token
}

export function logout() {
  window.localStorage.removeItem(USER_DATA_KEY.Token)
  window.localStorage.removeItem(USER_DATA_KEY.Username)
  window.localStorage.clear()
  console.log("[auth.js]退出登录")
}