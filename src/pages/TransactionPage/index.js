import React from "react";
import "./index.css";
export const TransactionForm = () => {
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
        <div className="form p-5 w-4/12 ml-6/12 bg-white rounded-lg">
          <p className="text-3xl font-bold text-green-600">Sender</p>
          <p className="italic">Fullname</p>
          <input type="text" class="form-input px-4 py-2 w-full rounded-md" />
          <p className="italic">Phone number</p>
          <input type="text" class="form-input px-4 py-2 w-full rounded-md" />
          <p className="italic">Email</p>
          <input type="text" class="form-input px-4 py-2 w-full rounded-md" />
          <p></p>
          <br />
          <p className="text-3xl text-green-600 font-bold">Tuition Info</p>
          <p className="italic">Student ID</p>
          <input type="text" class="form-input px-4 py-2 w-full rounded-md" />
          <p className="italic">Student full name</p>
          <input type="text" class="form-input px-4 py-2 w-full rounded-md" />
          <p className="italic">Amount</p>
          <input type="text" class="form-input px-4 py-2 w-full rounded-md" />
          <p></p>
          <br />
          <p className="text-3xl font-bold text-green-600">Transaction Info</p>
          <p className="italic">Sender balance</p>
          <input type="text" class="form-input px-4 py-2 w-full rounded-md" />
          <p className="italic">Tuition required</p>
          <input
            type="password"
            class="form-input px-4 py-2 w-full rounded-md"
          />
          <p></p>
          <br />
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
          <button className="confirm-btn bg-green-400 px-6 p-2 rounded-md text-green-900 text-bold">
            {" "}
            Send{" "}
          </button>
        </div>
      </div>
    </>
  );
};
