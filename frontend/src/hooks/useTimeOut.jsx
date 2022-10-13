import { useEffect, useCallback, useRef } from 'react';

export const useTimeOut = (callback, delay) => {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            callbackRef.current();
        }, delay);
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    //note that cleanup function alway be called before the callback
    //Ex: At first, the callback will be execute then return cleanup function
    //Next time, because we return cleanup function so the next time clean up function
    //will be called first then callback
    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return { reset, clear };
};
