import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../firebase";
import loadingIcon from "../../assets/netflix_spinner.gif";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let [signIn, setSignIn] = useState("Sign In");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);

  let submitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signIn === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <img src={loadingIcon} alt="" className="w-14" />
        </div>
      ) : (
        <div className="login-page w-full flex items-center justify-center">
          <img src={logo} alt="" className="absolute top-10 left-20 w-24" />
          <div className="w-[440px] h-auto rounded-lg px-8 py-8 bg-[#00000089]">
            <h1 className="text-3xl font-medium pb-8">{signIn}</h1>
            <form action="">
              {signIn === "Sign Up" ? (
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="w-full h-14 rounded-sm px-3 text-white bg-[#090808] border mb-5 outline-none"
                />
              ) : (
                <></>
              )}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full h-14 rounded-sm px-3 text-white bg-[#090808] border mb-5 outline-none"
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full h-14 rounded-sm px-3 text-white bg-[#090808] border mb-5 outline-none"
              />
              {signIn === "Sign Up" ? (
                <input
                  type="submit"
                  value="Sign Up"
                  onClick={submitData}
                  className="w-full h-12 rounded-sm text-white bg-[#E63E33] mb-5 cursor-pointer"
                />
              ) : (
                <input
                  type="submit"
                  value="Sign In"
                  onClick={submitData}
                  className="w-full h-12 rounded-sm text-white bg-[#E63E33] mb-5 cursor-pointer"
                />
              )}
            </form>

            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-3">
                <input type="checkbox" name="checkbox" />
                <label htmlFor="checkbox">Remember me</label>
              </div>
              <h1 className="cursor-pointer select-none">Need Help?</h1>
            </div>
            <div className="mt-5">
              {signIn === "Sign In" ? (
                <h1 className="text-[#717171]">
                  New to Netflix?
                  <span
                    className="font-semibold text-white cursor-pointer"
                    onClick={() => {
                      setSignIn("Sign Up");
                    }}
                  >
                    {" "}
                    Sign up now.
                  </span>
                </h1>
              ) : (
                <h1 className="text-[#717171]">
                  Already have account{" "}
                  <span
                    className="font-semibold text-white cursor-pointer"
                    onClick={() => {
                      setSignIn("Sign In");
                    }}
                  >
                    Sign In.
                  </span>
                </h1>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
