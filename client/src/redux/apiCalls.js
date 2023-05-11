import axios from "axios";
import { loginStart, loginFailure, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      user
    );
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};
