export const useFetchUser = () => {
    const getUser = async (studentID) => {
        const response = await fetch(`/api/user/${studentID}`);
        const json = await response.json();
        console.log('fetch user successfully <3')
        return json;
    };
    return { getUser };
};
