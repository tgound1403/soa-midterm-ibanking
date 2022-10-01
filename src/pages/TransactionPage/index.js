import React from "react";
import "./index.css";
export const TransactionForm = () => {
  return (
    <>
      <div className="background">
        <div className="logo shadow-lg">
          <h1 href="/login" className="text-4xl font-bold text-center">
            <a href="/" className="text-green-600">
              i
            </a>
            Banking
          </h1>
        </div>
        <div className="transaction-form shadow-lg p-5 w-4/12 ml-6/12 bg-white rounded-lg">
          <label className="text-3xl font-bold text-green-600">Sender</label>
          <label className="italic block text-gray-700 text-md  mb-1">
            Fullname
          </label>
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
          />
          <label className="italic block text-gray-700 text-md  mb-1">
            Phone number
          </label>
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
          />
          <label className="italic block text-gray-700 text-md  mb-1">
            Email
          </label>
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
          />
          <p></p>
          <br />
          <label className="text-3xl text-green-600 font-bold">
            Tuition Info
          </label>
          <label className="italic block text-gray-700 text-md  mb-1">
            Student ID
          </label>
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
          />
          <label className="italic block text-gray-700 text-md  mb-1">
            Student full name
          </label>
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
          />
          <label className="italic block text-gray-700 text-md  mb-1">
            Amount
          </label>
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
          />
          <p></p>
          <br />
          <label className="text-3xl  text-green-600 font-bold">
            Transaction Info
          </label>
          <label className="italic block text-gray-700 text-md mb-1">
            Sender balance
          </label>
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
          />
          <label className="italic block text-gray-700 text-md mb-1">
            Tuition required
          </label>
          <input
            type="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400"
          />
          <p>
            <input type="checkbox" class="rounded text-blue-500" /> I accept
            with{" "}
            <a href="/" className="font-bold italic text-green-600">
              term of uses
            </a>
            <a href="/"> and </a>
            <a href="/" className="font-bold italic text-green-600">
              policy
            </a>
          </p>
          <p></p>
          <br />
          <button className="confirm-btn hover:bg-green-300 w-full bg-green-400 px-6 p-2 rounded-md text-white font-bold">
            {" "}
            Send{" "}
          </button>
        </div>
      </div>
    </>
  );
};
