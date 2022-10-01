import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <div className="background">
        <div className="logo">
          <h1 className="text-4xl font-bold text-center">
            <a href="/" className="text-green-600">
              i
            </a>
            Banking
          </h1>
        </div>
        <div className="form p-5 w-3/12 ml-6/12 bg-white rounded-lg">
          <p className="font-bold">Username</p>
          <input type="text" class="form-input px-4 py-2 w-full rounded-md" />
          <p></p>
          <br />
          <p className="font-bold">Password</p>
          <input
            type="password"
            class="form-input px-4 py-2 w-full rounded-md"
          />
          <p></p>
          <br />
          <p>
            <input type="checkbox" class="rounded text-blue-500" /> I accept
            with{" "}
            <a href="/" className="font-bold italic text-green-500">
              term of uses
            </a>
            <a href="/"> and </a>
            <a href="/" className="font-bold italic text-green-500">
              policy
            </a>
          </p>
          <br />
          <Link to="/transaction">
            <button className="bg-green-400 px-6 p-2 rounded-md text-green-900 text-bold">
              {" "}
              Log In{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
