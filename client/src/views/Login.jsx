import FacebookLogin from "react-facebook-login";
import axios from "axios";

function Login() {
  const resFacebook = (callback) => {
    console.log(callback);
    axios
      .post("http://localhost:8000/api/users", {
        userId: callback.id,
        userName: callback.name,
        token: callback.accessToken,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("userId", res.data.userId);
          window.location.href = `${window.location.origin}`;
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <FacebookLogin appId="725790531357614" callback={resFacebook} />
    </div>
  );
}

export default Login;
