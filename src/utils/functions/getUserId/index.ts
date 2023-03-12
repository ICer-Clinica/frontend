export const getUserID = () => {
    const user = localStorage.getItem("@iCer:user") as any;
    const userJson = JSON.parse(user);

    return userJson.id;
};
