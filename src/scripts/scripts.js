export const httpGet = (searchTerm) => {
    const URL = `https://search-clients-hackdays2019-2-l5jsbxllcgxsaxostzcs2uc2im.ap-southeast-2.es.amazonaws.com/clients/_search?q=*${searchTerm ?searchTerm : ':'}*`

    fetch(URL).then(resp => console.log(resp));
}




