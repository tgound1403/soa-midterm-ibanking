import { useAuthContext } from './useAuthContext';

export const useOTP = () => {
    const { user } = useAuthContext();
    const { email } = user;

    const sendOTP = async () => {
        const response = await fetch('/api/user/sendOTP', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        const json = await response.json();
        if (!response.ok) {
            console.log('send OTP error :((');
        } else {
            console.log('send OTP success <3');
            return json;
        }
    };

    const verifyOTP = async (OTP) => {
        const response = await fetch('/api/user/verifyOTP', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ OTP }),
        });
        const json = await response.json();
        console.log(`'verifying OTP successfully <3`)
        return json;
    };

    return { sendOTP, verifyOTP };
};
