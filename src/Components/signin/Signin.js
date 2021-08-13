import { Link } from "react-router-dom";
import InputForm from "./InputForm";

function Signin({ signupHandler, signin }) {
  return (
    <div ref={signin} className="signin__main">
      <div className="container">
        <div className="row">
          <h1 className=" col-md-auto col-12  mb-4 sign__toContinue">
            Sign in to continue
          </h1>
          <h1 className=" col mb-4 sign__notAmember">
            Not a member yet? <span onClick={signupHandler}>Register now</span>
          </h1>
          <InputForm />
          <Link className="forgetPass" to="/">
            Forget Your Password?
          </Link>
          <h1 className="OrsignIn">Or sign in with</h1>
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

export default Signin;
