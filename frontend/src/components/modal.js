import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Spinner } from './spinner';
export const Modal = ({ username, amount, studentID }) => {
    const [open, setOpen] = useState(true);

    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                </Transition.Child>

                <div className='fixed inset-0 z-10 overflow-y-auto'>
                    <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            enterTo='opacity-100 translate-y-0 sm:scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        >
                            <Dialog.Panel className='flex content-center items-center justify-center w-screen h-screen z-10 relative'>
                                {amount != null ? (
                                    <div className='flex flex-col items-center justify-center z-10 sm:w-6/12 md:w-8/12 lg:w-5/12 2xl:w-3/12 shadow-lg p-5 h-96 w-9/12 bg-white rounded-lg'>
                                        <CheckCircleIcon className='w-20 h-20 sm:w-14 sm:h-14 text-green-600' />
                                        <h1 className='font-bold text-4xl md:text-5xl text-green-600 -mt-2 mb-6'>
                                            Congrats
                                        </h1>
                                        <strong className='text-xl'>{username}</strong>
                                        <p className='text-xl'>
                                            successfully paid tuition for <strong>{studentID}</strong>
                                        </p>
                                        <p className='text-xl'>
                                            Amount: <strong>{amount} VND</strong>
                                        </p>
                                        <button
                                            onClick={() => setOpen(false)}
                                            className='bg-green-600 mt-10 w-2/3 h-1/6 px-6 py-2 rounded-md text-white text-md md:text-xl font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:bg-green-700 duration-300'
                                        >
                                            Back to transaction
                                        </button>
                                    </div>
                                ) : (
                                    <Spinner />
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};
