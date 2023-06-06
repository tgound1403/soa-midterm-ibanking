import { useEffect } from 'react';
import { useTimeOut } from './useTimeOut';
export const useDebounce = (callback, delay, dependencies) => {
    const { reset } = useTimeOut(callback, delay);
    useEffect(reset, [...dependencies, reset]);
};
