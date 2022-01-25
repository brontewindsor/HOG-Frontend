import axios from "axios";
const url = "http://localhost:3002/";

export class ApiClient {
  constructor(tokenProvider, logoutHandler, newUserType, newUser) {
    this.userType=newUserType;
    this.username=newUser;
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }


  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
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

  login(username, password, email, userType, firstName, lastName, bio, location ) {
    return this.apiCall("post", url + "auth/", { username: username, password: password, email: email, userType: userType, firstName: firstName, lastName: lastName, bio: bio, location: location});
  }
  signUp(username, password, email, userType, firstName, lastName, bio, location) {
    console.log("username", username);
    return this.apiCall("post", url + "user/", { username: username, password: password, email: email, userType: userType, firstName: firstName, lastName: lastName, bio: bio, location: location });
  }

  getProfileCards() {
    return this.authenticatedCall("get", url);
  }

  addProfileCard(firstName, lastName,email,bio,linkedin,github,portfolio,admincomments,picture,hired,course,date) {
    return this.authenticatedCall("post", url, {firstName, lastName, email,bio,linkedin,github,portfolio,admincomments,picture,hired,course,date});
  }
  postImage(name,file){
    const formData = new FormData();
    formData.append('name',name);
    formData.append('myFile',file);
    return this.authenticatedCall("post",`${url}user/new`,formData)
}

  getUsers() {
    return this.authenticatedCall("get", url);
  }
  queryResult(searchParams) {
    return this.authenticatedCall("post", `${url}events/search`, searchParams)
  }

  addProfileCard(fullname,email,bio,linkedin,github,portfolio,admincomments,picture,hired,course,date) {
    
    return this.authenticatedCall("post", url, {fullname,email,bio,linkedin,github,portfolio,admincomments,picture,hired,course,date});
  }


  removeProfileCard(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }
  updateProfileCard(id,firstName, lastName, userType, email,bio, location, linkedin,github,portfolio,picture,cv) {
    return this.authenticatedCall("put", `${url}${id}`, { firstName, lastName, userType, email,bio, location, linkedin,github,portfolio,picture,cv});
  }
}
