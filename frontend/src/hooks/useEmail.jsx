import { useAuthContext } from './useAuthContext';

export const useEmail = () => {
    const { user } = useAuthContext();
    const { email } = user;

    const sendEmail = async (content) => {
        const response = await fetch('/api/user/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, content }),
        });
        const json = await response.json();
        if (!response.ok) {
            console.log('send OTP error :((');
        } else {
            console.log('send OTP success <3');
            return json;
        }
    };
    return { sendEmail };
};
