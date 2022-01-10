import "./Login.css";
import { ItemList } from "../context/itemstate";
const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = ItemList();
  // console.log(form);
  return (
    <div>
      <div className="LoginModal">
        <form>
          <div className="login">
            <h2 className="header">Sign In</h2>
            <div className="email">
              <h3 className="link label">Your Email</h3>
              <input
                type="email"
                className="input label"
                placeholder="youremail@gmail.com"
              />
              <div class="email error"></div>
            </div>
            <div className="password">
              <h3 className="link label">Password</h3>
              <input
                type="password"
                className="input"
                placeholder="123456789"
              />
              <div class="password error"></div>
            </div>
            <button className="search btn">Sign In</button>
          </div>
        </form>
        <div className="signup1">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="signupbtn"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
