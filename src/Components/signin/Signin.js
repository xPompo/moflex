import React from "react";
import { Link } from "react-router-dom";
import InputForm from "./InputForm";

function Signin() {
  return (
    <div className="signin__main">
      <div className="container">
        <div className="row">
          <h1 className=" col-auto mb-4 sign__toContinue">
            Sign in to continue
          </h1>
          <h1 className=" col mb-4 sign__notAmember">
            Not a member yet?{" "}
            <Link to="/signIn">
              <span>Register now</span>
            </Link>
          </h1>
          <InputForm />
          <Link className="forgetPass" to="/signUp">
            Forget Your Password?
          </Link>
          <h1 className="OrsignIn">Or sign in with</h1>
        </div>
        <div className="row  btn_centered">
          <Link className="col-4 social-link  px-0" to="/">
            <button className=" btn__main_0 google">google</button>
          </Link>
          <Link className="col-4  social-link px-0" to="/">
            <button className="btn__main_0 twitter">twiiter</button>
          </Link>
          <Link className="col-4  social-link px-0" to="/">
            <button className=" btn__main_0 facebook">facebook</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
