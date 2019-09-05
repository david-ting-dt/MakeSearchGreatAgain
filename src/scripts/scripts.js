const elasticsearch = require('elasticsearch');

export const httpGet = () => {

    const client = new elasticsearch.Client({
        host: '<a class="vglnk" href="http://username" rel="nofollow"><span>http</span><span>://</span><span>username</span></a>:password@host:port/'
        // <a class="vglnk" href="http://localhost:9200/" rel="nofollow"><span>http</span><span>://</span><span>localhost</span><span>:</span><span>9200</span><span>/</span></a> 
        // <a class="vglnk" href="http://root" rel="nofollow"><span>http</span><span>://</span><span>root</span></a>:12345@localhost:9200/ 
        // If you have set username and password
    });

    // Check if Connection is ok or not
    client.ping({
        // ping usually has a 3000ms timeout
        requestTimeout: Infinity,
    }, function (error) {
        if (error) {
            console.trace('elasticsearch cluster is down!');
        } else {
            console.log('All is well');
        }
    });

    client.search({
        index: "crud", // Your index name for example crud
        type: "doc", // Your index name for example doc    
    }).then(function (resp) {
        return resp.hits.hits;
    }, function (err) {
        console.log(err.message);
    });
}




