export const useOTP = () => {
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
    return { verifyOTP };
};
