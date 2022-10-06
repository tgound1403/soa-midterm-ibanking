import React from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';

export const TransactionForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
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
                    <label className='text-3xl font-bold text-green-500'>Sender</label>
                    <label className='italic block text-gray-700 text-md  mb-1'>Fullname</label>
                    <input
                        disabled
                        autoComplete='fullname'
                        required
                        type='text'
                        className='shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={'Trinh Cam Minh'}
                    />
                    <label className='italic block text-gray-700 text-md  mb-1'>Phone number</label>
                    <input
                        disabled
                        autoComplete='phoneNum'
                        required
                        type='text'
                        className='shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={'0907722143'}
                    />
                    <label className='italic block text-gray-700 text-md  mb-1'>Email</label>
                    <input
                        disabled
                        autoComplete='email'
                        required
                        type='text'
                        className='shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={'trinhcamminh25112002@gmail.com'}
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
                        value={'520H0659'}
                    />
                    <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md  mb-1">
                        Student full name
                    </label>
                    <input
                        disabled
                        type='text'
                        className='shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={'Trinh Cam Minh'}
                    />
                    <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md  mb-1">
                        Amount (VND)
                    </label>
                    <input
                        disabled
                        type='text'
                        className='shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={'23.000.000'}
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
                        value={'30.000.000'}
                    />
                    <label className="italic after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 text-md mb-1">
                        Tuition required (VND)
                    </label>
                    <input
                        disabled
                        type='text'
                        className='shadow appearance-none placeholder:text-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-green-400'
                        value={'23.000.000'}
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
                    </div>
                </form>
                <p className='text-green-500 italic text-center font-bold mt-2 '> &copy; DMT Team</p>
            </div>
        </>
    );
};
