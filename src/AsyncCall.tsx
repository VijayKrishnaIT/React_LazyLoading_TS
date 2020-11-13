import axios from "axios";
import url from "./Config";

function asyncCall(): any {
  return axios.get(url);
}
export default asyncCall;
