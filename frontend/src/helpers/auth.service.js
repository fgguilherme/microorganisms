import axios from "axios";
import config from "config/config.json";
const API_URL = config.API_URL;
let user;
class AuthService {

  login(username, password, remember) {
    return axios
      .post(API_URL + "login", {email:username,passwd:password})
      .then(response => {
        if (response.data.token) {
          // if(remember){
            console.log("save user")
            localStorage.setItem("user", JSON.stringify(response.data));
          // }
          user = response.data
        }
        console.log(user)
        return user;
      });
  }

  checkLastLogin(){
    const userStr = localStorage.getItem("user");
    if (userStr) user = JSON.parse(userStr);
    return user;
  }
  
  logout() {
    localStorage.removeItem("user");
    user = null;
  }
  
  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }
  
  getCurrentUser() {
    if(user == null){
      const userStr = localStorage.getItem("user");
      if (userStr) user = JSON.parse(userStr);
    }
    // console.log(user)
    return user;
  }
}
export default new AuthService();