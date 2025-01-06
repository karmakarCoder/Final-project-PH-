import React, { useContext, useState } from "react";
import image from "../../assets/authentication2 1.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import Authcontext from "../context/Authcontext";
import { Bounce, Slide, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const { createUser, signInWithGoogle, signInWithFacebook, signInWithGithub } =
    useContext(Authcontext);
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include a number and a letter";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setloading(true);
      createUser(formData.email, formData.password)
        .then(() => {
          toast.success(
            `${formData.name} your account creation was successful. `,
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            }
          );
          navigate("/signin");
        })
        .catch((error) => {
          setloading(false);
          toast.error(`${error.message} `, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });
        });
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  // log in with google
  const HandleGoogle = () => {
    signInWithGoogle()
      .then((user) => {
        toast.success(`${user?.user.displayName} sign in successful. `, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        navigate("/");
      })
      .catch((error) => {
        toast.success(`${error.message}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
  };

  // log in with Facebook
  const HandleFBlogin = () => {
    signInWithFacebook().then((user) => {
      console.log(user);
    });
  };

  // login with github
  const HandleGithubLogin = () => {
    signInWithGithub().then((user) => {
      console.log(user);
    });
  };

  return (
    <div
      id="signupbg1"
      className="h-[100vh] sm:h-[150vh] min-[660px]:h-[170vh] md:h-[100vh] bg-center bg-cover flex flex-col items-center justify-center"
    >
      <div className="container">
        <div
          id="signupbg2"
          className="flex h-full  w-full bg-center bg-cover overflow-hidden shadow-2xl rounded-md"
        >
          {/* Left Side */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center items-center p-8">
            <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
            <form className="md:w-3/4 w-full space-y-4" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full p-2 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-3 text-gray-500 focus:outline-none"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-golden text-white py-2 rounded-md"
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </form>
            <p
              className="mt-4 text-gray-600 flex items-center gap-x-2
          "
            >
              Already registered?{" "}
              <Link to={"/signin"} className="text-blue-500">
                Go to log in
              </Link>
            </p>

            <p className="font-medium text-dark2 text-base  pt-3">
              Or sign up with
            </p>
            <div className="flex items-center gap-x-3 text-2xl mt-2">
              <div
                onClick={HandleFBlogin}
                className="cursor-pointer text-sky-600"
              >
                <FaFacebook />
              </div>
              <div
                onClick={HandleGoogle}
                className="cursor-pointer text-red-600"
              >
                <FaGoogle />
              </div>
              <div onClick={HandleGithubLogin} className="cursor-pointer">
                <FaGithub />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 md:w-[75%] lg:w-1/2 hidden md:flex items-center justify-center">
            <img
              src={image}
              alt="Signup Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
