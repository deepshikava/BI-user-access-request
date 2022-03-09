//Server Connection URL
const url = "http://localhost:3001";
// const url = "http://orlubiweblv01:19086";

//URL Connection routes for making AXIOS calls to server
const urlConnection = {
  urlBiUserAccess: `${url}`,
};

//Regular Expressions for Validation for Login and Register forms
const REGEX_VALIDATE_FORM = {
  mailregex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};

export default {
  urlConnection,
  REGEX_VALIDATE_FORM,
};
