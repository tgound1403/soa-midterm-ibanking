import React from "react";
import "./index.css";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export const TransactionForm = () => {
  return (
    <>
      <div className="background">
        <div className="logo bg-white lg:w-3/12 md:w-6/12 sm:w-full shadow-lg">
          <h1 href="/login" className="text-4xl font-bold text-center">
            <a href="/" className="text-green-600">
              i
            </a>
            Banking
          </h1>
        </div>
        <form className="transaction-form sm:w-full md:w-8/12 lg:w-4/12 shadow-lg p-5 sm:px-6 lg:px-8 ml-6/12 bg-white rounded-lg">
          <label className="text-3xl font-bold text-green-500">Sender</label>
          <label className="italic block text-gray-700 text-md  mb-1">
            Fullname
          </label>
          <input
            autoComplete="fullname"
            required
            type="text"
            class="shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
            placeholder="Trinh Cam Minh"
          />
          <label className="italic block text-gray-700 text-md  mb-1">
            Phone number
          </label>
          <input
            autoComplete="phoneNum"
            required
            type="text"
            class="shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
            placeholder="0123456789"
          />
          <label className="italic block text-gray-700 text-md  mb-1">
            Email
          </label>
          <input
            autoComplete="email"
            required
            type="text"
            class="shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
            placeholder="minh123@gmail.com"
          />
          <p></p>
          <br />
          <label className="text-3xl text-green-500 font-bold">Tuition</label>
          <label className="italic block text-gray-700 text-md  mb-1">
            Student ID
          </label>
          <input
            required
            type="text"
            class="shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
            placeholder="520H0621"
          />
          <label className="italic block text-gray-700 text-md  mb-1">
            Student full name
          </label>
          <input
            required
            type="text"
            class="shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
            placeholder="Nguyen Trieu Duong"
          />
          <label className="italic block text-gray-700 text-md  mb-1">
            Amount (VND)
          </label>
          <input
            required
            type="text"
            class="shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
            placeholder="23.000.000"
          />
          <p></p>
          <br />
          <label className="text-3xl  text-green-500 font-bold">
            Transaction
          </label>
          <label className="italic block text-gray-700 text-md mb-1">
            Sender balance (VND)
          </label>
          <input
            required
            type="text"
            class="shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
            placeholder="100.000.000"
          />
          <label className="italic block text-gray-700 text-md mb-1">
            Tuition required (VND)
          </label>
          <input
            required
            type="password"
            class="shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
            placeholder="23.000.000"
          />
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
          <p></p>
          <br />
          <div>
            <button
              type="submit"
              className="group cursor-not-allowed relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-green-500 group-hover:text-green-400"
                  aria-hidden="true"
                />
              </span>
              Send
            </button>
          </div>
        </form>
        <p className="text-green-500 italic text-center font-bold mt-2 ">
          {" "}
          &copy; DMT Team
        </p>
      </div>
    </>
  );
};
