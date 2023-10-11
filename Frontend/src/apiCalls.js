import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  // console.log(userCredential);
  try {
    const res = await axios.post("auth/login", userCredential);
    // console.log(res)

    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (err) {
    // console.log(err)
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
