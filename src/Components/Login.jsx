import { useState, useEffect } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import Cookies from "js-cookie"; //https://www.npmjs.com/package/js-cookie
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setLoggedInStatus] = useState(false);

  const [allowedEmailsArray, setAllowedEmailsArray] = useState([
    "kevin.dowd@gmail.com",
    "ryan@ryanbakker.site",
  ]);

  useEffect(() => {
    console.log("------> ", Cookies.get("logged_in"));
    if (Cookies.get("logged_in")) {
      console.log("------> ", "logged in from earlier/before");
      setLoggedInStatus(true);
      props.onUpdateLoggedInState(true);
    }
  }, []);

  const showLoginForm = () => {
    setShowLogin(!showLogin);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let userEmail = emailInputRef.current.value;

    if (allowedEmailsArray.includes(userEmail)) {
      console.log("------> ", "allowed");
      Cookies.set("logged_in", true, { expires: 1 });
      setLoggedInStatus(true);
      props.onUpdateLoggedInState(true);
    }
  };

  const onLogout = () => {
    Cookies.remove("logged_in");
    props.onUpdateLoggedInState(false);
    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <p onClick={showLoginForm}>
        <span>LOGIN</span>{" "}
        <RiLoginBoxLine
          className={isLoggedIn ? "isLoggedIn" : "isNotLoggedIn"}
        />
      </p>

      {showLogin && !isLoggedIn && (
        <form onSubmit={onSubmit}>
          {/* <input type='email' defaultValue='kevin.dowd@gmail.com' placeholder='email' ref={emailInputRef} required /> */}
          <input
            type="email"
            placeholder="email"
            ref={emailInputRef}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
      {showLogin && isLoggedIn && (
        <form onSubmit={onLogout}>
          <button type="submit">Logout</button>
        </form>
      )}
    </div>
  );
}

export default Login;
