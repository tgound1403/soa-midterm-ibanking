import { useEffect, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { useHistories } from '../hooks/useHistories';
import moment from 'moment';
import { Link } from 'react-router-dom';
export const HistoryPage = () => {
    const { getHistories } = useHistories();
    const [history, setHistory] = useState(null);

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

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return (
        <>
            <div className='background lg:h-screen h-screen bg-gradient-to-r from-yellow-300 to-green-400'>
                <div className=' px-2 py-6 mb-16 my-0 mx-auto w-11/12 rounded-b-lg bg-white lg:w-2/12 md:w-4/12 sm:w-full shadow-lg'>
                    <h1 className='text-4xl  font-bold text-center'>
                        <Link to={'/'} className='text-green-600'>
                            i
                        </Link>
                        Banking
                    </h1>
                </div>
                {history &&
                    history.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='w-11/12 my-0 mx-auto mt-4 sm:w-11/12 md:w-8/12 lg:w-4/12 shadow-lg p-5 sm:px-6 lg:px-8 ml-6/12 bg-white rounded-lg'
                            >
                                <span className='flex flex-wrap'>
                                    <p className='font-bold text-4xl text-green-600 mb-2'>Send</p>
                                    <CheckCircleIcon
                                        className='h-9 w-9 text-green-600 group-hover:text-green-400'
                                        aria-hidden='true'
                                    />
                                </span>
                                <div className='flex flex-wrap'>
                                    <p className='md:w-1/2 font-bold text-xl'>
                                        Date: {moment(item.createdAt).format('DD-MM-YYYY')}
                                    </p>
                                    <p className='font-bold text-xl'>
                                        Time: {moment(item.createdAt).format('HH:mm a')}
                                    </p>
                                </div>
                                <div className='flex flex-wrap'>
                                    <p className='md:w-1/2 font-bold text-xl'>Sender: {item.Sender}</p>
                                    <p className='md:w-1/2 font-bold text-xl'>Receiver: {item.Receiver}</p>
                                    <p className='md:w-1/2 font-bold text-xl'>Content: {item.content}</p>
                                    <p className='md:w-1/2 font-bold text-xl'>
                                        Amount: {formatter.format(item.amount)}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};
