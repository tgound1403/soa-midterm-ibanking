export const useHistories = () => {
    const getHistories = async (studentID) => {
        const response = await fetch(`/api/history/${studentID}`);
        const json = await response.json();
        return json;
    };
    return { getHistories };
};
