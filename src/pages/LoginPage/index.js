import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <div className="background">
        <div className="logo bg-white lg:w-2/12 md:w-4/12 sm:w-full shadow-lg">
          <h1 className="text-4xl font-bold text-center">
            <a href="/" className="text-green-600">
              i
            </a>
            Banking
          </h1>
        </div>
        <form className="login-form sm:w-full md:w-6/12 lg:w-3/12 shadow-lg p-5 ml-6/12 bg-white rounded-lg">
          <label className="font-bold text-4xl mb-3 text-green-500">
            Log In
          </label>
          <label
            for="username"
            className="block mt-3 text-gray-700 text-md font-bold mb-1"
          >
            Username
          </label>
          <input
            required
            placeholder="your username"
            type="text"
            className="shadow mb-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
          />
          <label
            for="password"
            className="block text-gray-700 text-md font-bold mb-1"
          >
            Password
          </label>
          <input
            required
            placeholder="your password"
            type="text"
            className="shadow mb-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
          />
          <p>
            <input required type="checkbox" class="rounded text-blue-500" /> I
            accept with{" "}
            <a href="/" className="font-bold italic text-green-500">
              term of uses
            </a>
            <a href="/"> and </a>
            <a href="/" className="font-bold italic text-green-500">
              policy
            </a>
          </p>
          {/* <p class="text-red-500 text-sm italic">Please fill out this field.</p> */}

          <br />
          <Link to="/transaction">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-400 w-full px-6 p-2 rounded-md text-white font-bold"
            >
              {" "}
              Log In{" "}
            </button>
          </Link>
        </form>
        <p className="text-green-500 italic text-center font-bold mt-60">
          {" "}
          &copy; DMT Team
        </p>
      </div>
    </>
  );
};
