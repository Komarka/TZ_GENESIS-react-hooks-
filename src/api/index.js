
export default getUsers = async (url) => {
    let error = null;
    let users = [];

    try {
        const response = await fetch(url);
        const data = await response.json();
        users  = data.users;        
        } catch (error) {
            error = error;
        }
        
    return { users, error };

}