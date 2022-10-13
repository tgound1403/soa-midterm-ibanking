import { useEffect, useCallback, useRef } from 'react';

export const useTimeOut = (callback, delay) => {
    const callbackRef = useRef();
    const timeoutRef = useRef();

    //if callback parameter really change then we redefine the callback function
    //otherwise we keep it the same with the old callback function
    //note that this old callback function still work as usual expect React will not re-render this
    //callback function again (refer references type in JS)
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    //if delay parameter is changed then redefine this setTimeOut function
    //otherwise we keep it the same
    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            callbackRef.current();
        }, delay);
    }, [delay]);

    //this callback function will only defined one time so the next time
    //React won't re-render this callback function anymore
    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    //if one those three changes, the set() function run
    //then clear it, note that set and clear is changed when the dependency
    // of these function change (because when those function redefined then JS will consider them as the new one)
    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    //this only reset the set() to make it run again
    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return { reset, clear };
};
