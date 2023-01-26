export const getRandomUsers = (num) => {
    const url = "https://randomuser.me/api/?results=" + num;

    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    };

    return fetch(url, fetchOptions).then(res => res.json()).catch(err => console.log(err));
}