import { useAuthContext } from '../hooks/useAuthContext';
export const useHistories = () => {
    const { user } = useAuthContext();
    const { additionalName, StudentID } = user;

    const postHistories = async (Receiver, receiverID, amount, content = 'Học phí học kỳ 2 2022-2023') => {
        const response = await fetch('/api/history', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Sender: additionalName,
                senderID: StudentID,
                Receiver,
                receiverID,
                amount,
                content,
            }),
        });
        const json = response.json();
        return json;
    };

    const getHistories = async () => {
        const response = await fetch(`/api/history?Sender=${additionalName}&&receiverID=${StudentID}`);
        const json = await response.json();
        console.log('fetch histories successfully <3');
        return json;
    };
    return { getHistories, postHistories };
};
