export const httpGet = (searchTerm) => {

    const URL = `https://search-clients-hackdays2019-2-l5jsbxllcgxsaxostzcs2uc2im.ap-southeast-2.es.amazonaws.com/claudiu/_search?q=*${searchTerm ? searchTerm : ':'}*`

    const status = (response) => {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    const json = (response) => response.json();

    fetch(URL)
        .then(status)
        .then(json);

}




