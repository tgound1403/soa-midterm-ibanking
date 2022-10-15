export const useFetchUser = () => {
    const getUser = async (studentID) => {
        const response = await fetch(`/api/user/${studentID}`);
        const json = await response.json();
        return json;
    };
    return { getUser };
};
