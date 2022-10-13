import { useEffect } from 'react';
import { useTimeOut } from './useTimeOut';
export const useDebounce = (callback, delay, dependencies) => {
    const { reset, clear } = useTimeOut(callback, delay);
    useEffect(reset, [...dependencies, reset]);

    //this seconde useEffect is to prevent the useTimeOut function run when component is
    //mounted for the first time
    useEffect(clear, [clear]);
};
