import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDebounce } from "../hooks/useDebounce";

export const Modal = () => {
  const [studentID, setStudentID] = useState();

  let isLoading = () => {
    if (studentID) return;
  };

  return (
    <>
      <div className="bg-black opacity-30">
        <div className="flex w-11/12 my-0 mx-auto mt-4 mb-16 sm:w-11/12 sm:mt-40 sm:mb-72 md:w-8/12 lg:w-4/12 xl:mt-10 xl:mb-10  shadow-lg p-5 sm:px-6 lg:px-8 ml-6/12 bg-white rounded-lg">
          <CheckCircleIcon className="w-10 h-10" />
          <h1 className="font-bold text-green-600">Send</h1>
          <p className="text-lg">Student: {}</p>
          <p className="text-lg">Amount: {}</p>
          <button className="rounded-lg">Back to transaction</button>
        </div>
      </div>
    </>
  );
};
