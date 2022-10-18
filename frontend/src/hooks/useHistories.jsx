import { useAuthContext } from '../hooks/useAuthContext';
export const useHistories = () => {
    const { user } = useAuthContext();
    const { additionalName, StudentID } = user;

    const getHistories = async () => {
        const response = await fetch(`/api/history?Sender=${additionalName}&&receiverID=${StudentID}`);
        const json = await response.json();
        console.log('fetch histories successfully <3');
        return json;
    };
    return { getHistories };
};
