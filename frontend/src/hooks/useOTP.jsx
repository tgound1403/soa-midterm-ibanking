import { useAuthContext } from '../hooks/useAuthContext';
export const useOTP = () => {
    const { user } = useAuthContext();
    const { StudentID } = user;
    const generateOTP = async () => {
        const response = await fetch(`/api/user/resetOTP/${StudentID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        });
        const json = response.json();
        return json;
    };

    const verifyOTP = async (OTP) => {
        const response = await fetch('/api/user/verifyOTP', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ OTP }),
        });
        const json = await response.json();
        console.log(`'verifying OTP successfully <3`);
        return json;
    };
    return { verifyOTP, generateOTP };
};
