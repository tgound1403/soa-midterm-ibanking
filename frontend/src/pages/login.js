import { useRef } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(usernameRef.current.value, passwordRef.current.value);
  };

  return (
    <>
      <div className="background lg:h-full h-screen bg-gradient-to-r from-yellow-300 to-green-400">
        <div className=" px-2 py-6 my-0 mx-auto w-11/12 rounded-b-lg bg-white lg:w-2/12 md:w-4/12 sm:w-full shadow-lg">
          <h1 className="text-4xl  font-bold text-center">
            <Link to="/" className="text-green-600">
              i
            </Link>
            Banking
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="login-form my-0 mx-auto lg:mb-56 xl:mt-64 xl:mb-64 mt-12 mb-6 w-11/12 sm:mt-64 sm:mb-40 md:mb-72 lg:mt-20 md:mt-64 sm:w-11/12 md:w-6/12 lg:w-3/12 shadow-lg p-5 ml-6/12 bg-white rounded-lg"
        >
          <label className="font-bold text-4xl mb-3 text-green-500">
            Log In
          </label>
          <label
            htmlFor="username"
            className="block mt-3 text-gray-700 text-md font-bold mb-1"
          >
            Username
          </label>
          <input
            required
            placeholder="username"
            type="text"
            className="peer shadow mb-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
            ref={usernameRef}
          />
          <label
            htmlFor="password"
            className="block text-gray-700 text-md font-bold mb-1"
          >
            Password
          </label>
          <input
            required
            placeholder="password"
            type="password"
            className="peer shadow mb-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
            ref={passwordRef}
          />
          {error && <i className="text-red-600">{error}</i>}
          <p>
            <input required type="checkbox" className="rounded text-blue-500" />{" "}
            I accept with{" "}
            <a href="/" className="font-bold italic text-green-500">
              term of uses
            </a>
            <a href="/"> and </a>
            <a href="/" className="font-bold italic text-green-500">
              policy
            </a>
          </p>
          <br />
          <button
            type="submit"
            className="bg-green-600 w-full px-6 p-2 rounded-md text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-green-700 duration-300"
          >
            {" "}
            Log In{" "}
          </button>
        </form>
        <p className="text-green-500 italic text-center font-bold">
          {" "}
          &copy; DMT Team
        </p>
      </div>
    </>
  );
};
