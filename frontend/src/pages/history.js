import { useEffect, useState } from 'react';
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/20/solid';
import { useHistories } from '../hooks/useHistories';
import { useAuthContext } from '../hooks/useAuthContext';
import moment from 'moment';
import { Link } from 'react-router-dom';
export const HistoryPage = () => {
    const { getHistories } = useHistories();
    const [history, setHistory] = useState(null);

    const { user } = useAuthContext();
    //destructuring all the properties from user object
    const { StudentID } = user;

    //fetch API to get user transaction history
    useEffect(() => {
        const fetchHistory = async () => {
            const histories = await getHistories();
            setHistory(histories);
        };
        fetchHistory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const checkSender = (sender) => {
        return sender === StudentID;
    };

    return (
        <>
            <div className='background pb-4 2xl:h-screen h-full bg-gradient-to-r from-yellow-300 to-green-400'>
                <div className=' px-2 py-6 mb-16 my-0 mx-auto w-11/12 rounded-b-lg bg-white xl:w-2/12 lg:w-4/12 md:w-4/12 sm:w-full shadow-lg'>
                    <h1 className='text-4xl  font-bold text-center'>
                        <Link to={'/'} className='text-green-600'>
                            i
                        </Link>
                        Banking
                    </h1>
                </div>
                <div className='w-11/12 p-4 mt-4 sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 my-0 mx-auto '>
                    <Link to='/transaction'>
                        <ArrowLeftIcon className='h-12 w-12 fixed rounded-full hover:bg-green-600 hover:text-white animate-bounce bg-white p-1 shadow-lg duration-300 ' />
                    </Link>
                </div>
                <div className='w-11/12 overflow-auto mt-10 scrollbar-thin scrollbar-thumb-white scrollbar-track-green-600 h-3/4 p-4 sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 my-0 mx-auto '>
                    {history &&
                        history.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='shadow-lg p-5 sm:px-6 lg:px-8 ml-6/12 mb-4 bg-white rounded-lg'
                                >
                                    <span className='flex flex-wrap'>
                                        <p
                                            className={
                                                checkSender(item.senderID)
                                                    ? 'font-bold text-4xl text-green-600 mb-2'
                                                    : 'font-bold text-4xl text-red-600 mb-2'
                                            }
                                        >
                                            {checkSender(item.senderID) ? 'Paid by user' : 'Paid by other'}
                                        </p>
                                        <CheckCircleIcon
                                            className={
                                                checkSender(item.senderID)
                                                    ? 'h-9 w-9 mt-1 ml-2 text-green-600 '
                                                    : 'h-9 w-9 mt-1 ml-2 text-red-600 '
                                            }
                                            aria-hidden='true'
                                        />
                                    </span>
                                    <p className='font-bold text-xl'>
                                        Execution time: {moment(item.createdAt).format('DD-MM-YYYY')}
                                    </p>
                                    <div className='flex flex-wrap'></div>
                                    <div className='flex flex-wrap'>
                                        <p className='md:w-2/3 font-bold text-xl'>Sender: {item.Sender}</p>
                                        <p className='md:w-1/3 font-bold text-xl'>Student: {item.receiverID}</p>
                                    </div>
                                    <p className=' font-bold text-xl'>Description: {item.content}</p>
                                    <p className='inline-block font-bold text-xl '>
                                        {checkSender(item.senderID) ? 'Balance:' : 'Amount:'}
                                    </p>
                                    <p
                                        className={
                                            checkSender(item.senderID)
                                                ? 'font-bold inline-block text-xl text-green-600'
                                                : 'font-bold inline-block text-xl text-red-600'
                                        }
                                    >
                                        {checkSender(item.senderID)
                                            ? '-' + formatter.format(item.amount)
                                            : formatter.format(item.amount)}
                                    </p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};
