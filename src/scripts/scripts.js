export const httpGet = () => {
    const URL = "http://api.icndb.com/jokes";

    fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json()).then(response => console.log(response));
}
