import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (additionalName, password, email, telephone, balance, amount) => {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(additionalName, password, email, telephone, balance, amount),
        });
        const json = response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.message);
        }
        if (response.ok) {
            //save user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            //update the global state
            dispatch({ type: 'LOGIN', payload: json });

            setIsLoading(false);
        }
    };
    return { error, isLoading, login };
};
