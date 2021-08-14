import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

function Signup({ signInHandler, signin }) {
  return (
    <div ref={signin} className="signUp__main">
      <div className="container">
        <div className="row">
          <h1 className=" col-md-auto col-12 mb-4 sign__toContinue">
            Sign up to continue
          </h1>
          <h1 className=" col mb-4 you__member">
            Have an account? <span onClick={signInHandler}>Login Now</span>
          </h1>
          <SignUpForm />
          <h1 className="Register">Or Register with</h1>
        </div>
        <div className="row  btn_centered">
          <Link
            className="col-md-4 col-12 mt-2 mt-md-0 social-link  px-0"
            to="/"
          >
            <button className=" btn__main_0 google">google</button>
          </Link>
          <Link
            className="col-md-4 col-12 mt-2 mt-md-0  social-link px-0"
            to="/"
          >
            <button className="btn__main_0 twitter">twiiter</button>
          </Link>
          <Link
            className="col-md-4 col-12 mt-2 mt-md-0  social-link px-0"
            to="/"
          >
            <button className=" btn__main_0 facebook">facebook</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
