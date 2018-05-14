'use strict';

const request = require('request-promise-native').defaults({timeout: 9999});

var getTicker = async (symbol) => {

    const options = {
        uri: `https://bitgrail.com/api/v1/${symbol}/ticker`,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'
        },
    };

    const responseBody = await request(options);
    const responseData = JSON.parse(responseBody);

    if (responseData.success === 1) {
        let { bid, ask, last } = responseData.response;
        return { bid, ask, last };
    }
    else {
        return { bid: "error", ask: "error", last: "error"};
    }
};

exports.getTicker = getTicker;
