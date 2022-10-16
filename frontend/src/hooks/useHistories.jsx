export const useHistories = () => {
    const getHistories = async (studentID) => {
        const response = await fetch(`/api/history/${studentID}`);
        const json = await response.json();
        console.log('fetch histories successfully <3');
        return json;
    };
    return { getHistories };
};
