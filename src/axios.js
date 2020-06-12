// import the library version of axios
import axios from "axios";
// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://restful.training/api/pingpong",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer D4UAz3qtcenhF8xKIK38xEdLDA3hkCJ9lZvWyH6Kb6iIdTYjXALqCRb9Ekdm20ToStzCtxOepW28cESc"
    },
});