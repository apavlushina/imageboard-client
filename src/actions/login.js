import request from "superagent";

export const LOGIN = "LOGIN";

const baseUrl = "http://localhost:4000";

function doLogin(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      console.log("response", response);
      const action = doLogin(response.body);

      dispatch(action);
    })
    .catch(console.error);
};
