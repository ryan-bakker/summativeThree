import { useState, useEffect } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import Cookies from "js-cookie"; //https://www.npmjs.com/package/js-cookie
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import UserAccount from "./UserAccount";

function Login(props) {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setLoggedInStatus] = useState(false);

  const [allowedEmailsArray, setAllowedEmailsArray] = useState([
    "kevin.dowd@gmail.com",
    "ryan@ryanbakker.site",
    "example@email.com",
  ]);

  useEffect(() => {
    console.log("Logged in =", Cookies.get("logged_in"));
    if (Cookies.get("logged_in")) {
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
    console.log(userEmail);

    if (allowedEmailsArray.includes(userEmail)) {
      console.log("------> ", "allowed");
      Cookies.set("logged_in", true, { expires: 1 });
      setLoggedInStatus(true);
      props.onUpdateLoggedInState(true);
      hideLoginBtn();
    }
  };

  const hideLoginBtn = () => {
    document.querySelector(".login-wrapper span").classList.add("log-remove");
  };

  const showLoginBtn = () => {
    document.querySelector(".login-wrapper span").classList.add("log-show");
  };

  const onLogout = () => {
    Cookies.remove("logged_in");
    props.onUpdateLoggedInState(false);
    navigate("/");
    showLoginBtn();
  };

  return (
    <div className="login-wrapper">
      <p onClick={showLoginForm}>
        <span>Login</span>{" "}
      </p>

      {showLogin && !isLoggedIn && (
        <form onSubmit={onSubmit} className="login-window">
          {/* <input type='email' defaultValue='kevin.dowd@gmail.com' placeholder='email' ref={emailInputRef} required /> */}
          <input
            type="email"
            placeholder="email"
            ref={emailInputRef}
            required
          />
          <button type="submit" className="login-submit">
            <FaAngleRight />
          </button>
        </form>
      )}
      {showLogin && isLoggedIn && (
        <form onSubmit={onLogout}>
          <button type="submit" className="logout">
            Logout
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
