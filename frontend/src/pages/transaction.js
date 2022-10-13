import { useEffect, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
const formatCurrency = require('format-currency');

export const TransactionForm = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const [history, setHistory] = useState(null);
    //destructuring all the properties from user object
    const { additionalName, StudentID, email, telephone, balance, amount } = user;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout();
    };

    //fetch API to get user transaction history
    useEffect(() => {
        const fetchHistory = async () => {
            const response = await fetch(`/api/history/${StudentID}`);
            const json = await response.json();
            setHistory(json.createdAt);
        };
        fetchHistory();
    }, [StudentID]);

    return (
        <>
            <div className='background lg:h-full h-screen'>
                <div className=' my-0 w-11/12 mx-auto px-2 py-6 bg-white rounded-b-lg lg:w-3/12 md:w-6/12 sm:w-full shadow-lg'>
                    <h1 href='/login' className='text-4xl font-bold text-center'>
                        <a href='/' className='text-green-600'>
                            i
                        </a>
                        Banking
                    </h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className='transaction-form w-11/12 my-0 mx-auto mt-4 mb-16 sm:w-11/12 sm:mt-40 sm:mb-72 md:w-8/12 lg:w-4/12 xl:mt-10 xl:mb-10  shadow-lg p-5 sm:px-6 lg:px-8 ml-6/12 bg-white rounded-lg'
                >
                    {history && <h1>History: {new Date(history).toLocaleString('vi-vn')}</h1>}
                    <label className='text-3xl font-bold text-green-500'>Sender</label>
                    <label className='italic block text-gray-700 text-md  mb-1'>Fullname</label>
                    <input
                        disabled
                        required
                        type='text'
                        className='shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={additionalName}
                    />
                    <label className='italic block text-gray-700 text-md  mb-1'>Phone number</label>
                    <input
                        disabled
                        required
                        type='text'
                        className='shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={telephone}
                    />
                    <label className='italic block text-gray-700 text-md  mb-1'>Email</label>
                    <input
                        disabled
                        required
                        type='text'
                        className='shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={email}
                    />
                    <p></p>
                    <br />
                    <label className='text-3xl text-green-500 font-bold'>Tuition</label>
                    <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md  mb-1">
                        Student ID
                    </label>
                    <input
                        disabled
                        required
                        type='text'
                        className='shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={StudentID}
                    />
                    <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md  mb-1">
                        Student Fullname
                    </label>
                    <input
                        disabled
                        type='text'
                        className='shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={additionalName}
                    />
                    <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md  mb-1">
                        Tuition required (VND)
                    </label>
                    <input
                        disabled
                        type='text'
                        className='shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={formatCurrency(amount)}
                    />
                    <p></p>
                    <br />
                    <label className='text-3xl  text-green-500 font-bold'>Transaction</label>
                    <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md mb-1">
                        Sender balance (VND)
                    </label>
                    <input
                        disabled
                        type='text'
                        className='shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={formatCurrency(balance)}
                    />
                    <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md mb-1">
                        Tuition required (VND)
                    </label>
                    <input
                        disabled
                        type='text'
                        className='shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={formatCurrency(amount)}
                    />
                    <p>
                        <input type='checkbox' className='rounded text-blue-500' /> I accept with{' '}
                        <a href='/' className='font-bold italic text-green-500'>
                            term of uses
                        </a>
                        <a href='/'> and </a>
                        <a href='/' className='font-bold italic text-green-500'>
                            policy
                        </a>
                    </p>
                    <p></p>
                    <br />
                    <div>
                        <button
                            type='submit'
                            className='group cursor-not-allowed relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                        >
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                <LockClosedIcon
                                    className='h-5 w-5 text-green-500 group-hover:text-green-400'
                                    aria-hidden='true'
                                />
                            </span>
                            Send
                        </button>
                        <br />
                        <button
                            onClick={handleLogout}
                            type='submit'
                            className='bg-green-600 hover:bg-green-400 w-full px-6 p-2 rounded-md text-white font-bold'
                        >
                            {' '}
                            Log Out{' '}
                        </button>
                    </div>
                </form>
                <p className='text-green-500 italic text-center font-bold mt-2 '> &copy; DMT Team</p>
            </div>
        </>
    );
};
