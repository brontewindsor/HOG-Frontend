import axios from "axios";
//const url = "https://event-dashboard-app-backend.herokuapp.com/";
const url = "http://localhost:3001/";

export class ApiClient {
  constructor(tokenProvider,logoutHandler){
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }


  authenticatedCall(method,url,data){
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider
      },
      data,
    }).catch((error) => {
      if(error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject()
      } else {
      throw error;
    }
    });
  }

  apiCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }

  login(username,password) {
    return this.apiCall("post",url + "auth/",{username: username, password: password});
  }
  signUp(username, password, email) {
    console.log("username",username);
    return this.apiCall("post", url + "user/", { userName: username, password: password, userType: 'participant', email: email });
  }

  getAds() {
    return this.authenticatedCall("get", url);
  }
  getUsers() {
    return this.authenticatedCall("get", url);
  }
  queryResult(searchParams){
    return this.authenticatedCall("post" , `${url}events/search`, searchParams)
  }

  addAd(event, location, summary, date, time ) {
    return this.authenticatedCall("post", url, {event, location, summary, date, time });
  }
  

  removeAd(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }

  updateAd(id, event, location, summary, date, time) {
    return this.authenticatedCall("put", `${url}${id}`, { event, location, summary, date, time});
  }
}
