import mainCaller from "./mainCaller";
import HTTPMethods from "./HTTPMethods";

export class GetUserData {
  static endpoint = "/api/user/";

  static get() {
    return mainCaller(this.endpoint, HTTPMethods.get)
  }
}