//note that we don't use dispatch here because
//these input which we want to change are using their own useState
//so in order to change them we must replace these useState with something else
//so that dispatch can keep in sync with our database without using useState hook
export const useUpdateTuition = () => {
    const updateTuition = async (SenderID, ReceiverID, balance, amount) => {
        const response = await fetch('/api/user/updateTuition', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ SenderID, ReceiverID, balance, amount }),
        });
        const json = await response.json();

        if (!response.ok) {
            console.log('update tuition failed :((');
            return null;
        }

        return json;
    };
    return { updateTuition };
};
