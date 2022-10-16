import { useEffect, useState, useRef } from "react";
import {
  LockClosedIcon,
  UserCircleIcon,
  AcademicCapIcon,
  BanknotesIcon,
  ArrowLeftOnRectangleIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/20/solid";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useDebounce } from "../hooks/useDebounce";
import { useOTP } from "../hooks/useOTP";
import { useFetchUser } from "../hooks/useFetchUser";
const formatCurrency = require("format-currency");

export const TransactionForm = () => {
  const { user } = useAuthContext();
  //destructuring all the properties from user object
  const { additionalName, StudentID, email, telephone, balance, amount } = user;
  const [studentName, setStudentName] = useState(null);
  const [studentID, setStudentID] = useState(StudentID);
  const [studentBalance, setStudentBalance] = useState(balance);
  const [tuitionRequired, setTuitionRequired] = useState(amount);
  const [error, setError] = useState(false);
  const [isCorrectOTP, setIsCorrectOTP] = useState();
  const [showInputOTP, setShowInputOTP] = useState(false);
  const { logout } = useLogout();
  const { sendOTP, verifyOTP } = useOTP();
  const { getUser } = useFetchUser();
  const OTPRef = useRef();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setShowInputOTP(true);
    await sendOTP();
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const isOTP = await verifyOTP(OTPRef.current.value);
    isOTP ? setIsCorrectOTP(true) : setIsCorrectOTP(false);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };

  //fetch API to get user information
  const fetchUser = async () => {
    const json = await getUser(studentID);
    //incase bad request then json.error will be used
    //same to 0
    setStudentName(json.additionalName || json.error);
    setTuitionRequired(json.amount);
    setStudentBalance(json.balance);
  };
  useDebounce(fetchUser, 1000, [studentID]);

  //compare if balance is less tuition required
  useEffect(() => {
    studentBalance < tuitionRequired ? setError(true) : setError(false);
  }, [studentName, studentBalance, tuitionRequired]);

  return (
    <>
      <div className="background h-screen">
        <div className=" my-0 w-11/12 mx-auto px-2 py-6 bg-white rounded-b-lg lg:w-3/12 md:w-6/12 sm:w-full shadow-lg">
          <h1 href="/login" className="text-4xl font-bold text-center">
            <a href="/" className="text-green-600">
              i
            </a>
            Banking
          </h1>
        </div>
        <form className="transaction-form w-11/12 my-0 mx-auto mt-4 mb-16 sm:w-11/12 sm:mt-40 sm:mb-72 md:w-8/12 lg:w-4/12 xl:mt-10 xl:mb-10  shadow-lg p-5 sm:px-6 lg:px-8 ml-6/12 bg-white rounded-lg">
          <div className="flex justify-between mb-2">
            <ArrowLeftOnRectangleIcon
              onClick={handleLogout}
              className=" h-9 w-9 cursor-pointer text-green-600 mr-2"
              aria-hidden="true"
            />
            <ClipboardDocumentIcon
              href="/history"
              className="h-9 w-9 cursor-pointer text-green-600 mr-2"
              aria-hidden="true"
            />
          </div>
          <div className="flex mb-1">
            <UserCircleIcon
              className="h-9 w-9 text-green-600 mr-2"
              aria-hidden="true"
            />
            <label className="text-3xl font-bold text-green-600">Sender</label>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-2/3 px-2 mb-6 md:mb-0">
              <label className="italic block text-gray-700 text-md ">
                Fullname
              </label>
              <input
                style={{ cursor: "not-allowed" }}
                disabled
                required
                type="text"
                className="shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                value={additionalName}
              />
            </div>
            <div class="w-full md:w-1/3 px-2 mb-6 md:mb-0">
              <label className="italic block text-gray-700 text-md ">
                Phone number
              </label>
              <input
                style={{ cursor: "not-allowed" }}
                disabled
                required
                type="text"
                className="shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                value={telephone}
              />
            </div>
          </div>
          <div class="px-2">
            <label className="italic block text-gray-700 text-md mt-1">
              Email
            </label>
            <input
              style={{ cursor: "not-allowed" }}
              disabled
              required
              type="text"
              className="shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              value={email}
            />
          </div>
          <p></p>
          <br />
          <div className="flex mb-1">
            <AcademicCapIcon
              className="h-9 w-9 text-green-600 mr-2"
              aria-hidden="true"
            />
            <label className="text-3xl font-bold text-green-600">Tuition</label>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3 px-2 mb-6 md:mb-0">
              <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md ">
                Student ID
              </label>
              <input
                required
                type="text"
                className="shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                onChange={(e) => setStudentID(e.target.value)}
                value={studentID || StudentID}
              />
            </div>
            <div class="w-full md:w-2/3 px-2 mb-6 md:mb-0">
              <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md  ">
                Student Fullname
              </label>
              <input
                disabled
                type="text"
                className="shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                value={studentName || additionalName}
              />
            </div>
          </div>
          <div className="px-2">
            <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md  mt-1">
              Tuition required (VND)
            </label>
            <input
              disabled
              type="text"
              className="shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              value={formatCurrency(tuitionRequired)}
            />
          </div>
          <p></p>
          <br />
          <div className="flex mb-1">
            <BanknotesIcon
              className="h-9 w-9 text-green-600 mr-2"
              aria-hidden="true"
            />
            <label className="text-3xl font-bold text-green-600">
              Transaction
            </label>
          </div>
          <div className="flex flex-wrap">
            <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
              <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md ">
                Sender balance (VND)
              </label>
              <input
                disabled
                type="text"
                className="shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                value={formatCurrency(studentBalance)}
              />
            </div>
            <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
              <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md ">
                Tuition required (VND)
              </label>
              <input
                disabled
                type="text"
                className="shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                value={formatCurrency(tuitionRequired)}
              />
            </div>
          </div>
          {error ? (
            <div className="flex my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
              <em className="ml-2 text-red-500">
                Your balance is less than tuition required!
              </em>
            </div>
          ) : (
            <div className="flex my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <em className="ml-2 text-green-500">All information accepted!</em>
            </div>
          )}
          <p>
            <input type="checkbox" className="rounded text-blue-500" /> I accept
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
            {error ? (
              <button
                onClick={handleSendOTP}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-green-500 group-hover:text-green-400"
                    aria-hidden="true"
                  />
                </span>
                Send OTP
              </button>
            ) : (
              <button
                onClick={handleSendOTP}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Send OTP
              </button>
            )}
            <br />
          </div>
          {showInputOTP && (
            <>
              <label className="italic block text-gray-700 text-md mt-2">
                OTP
              </label>
              <input
                ref={OTPRef}
                required
                type="text"
                className="shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              />
              <button
                onClick={handleVerifyOTP}
                type="submit"
                className="group relative flex w-full justify-center mt-2 rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Verify
              </button>
              {isCorrectOTP ? (
                <h1 className="text-green-500">Correct OTP</h1>
              ) : (
                <h1 className="text-red-500">Incorrect OTP!</h1>
              )}
            </>
          )}
        </form>
        <p className="text-green-500 italic text-center font-bold mt-2 ">
          {" "}
          &copy; DMT Team
        </p>
      </div>
    </>
  );
};
