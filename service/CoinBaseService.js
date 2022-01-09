var fetch = require('node-fetch');

class CoinBaseService{
    getCryptoPrice(priceName) {
        return fetch(`https://api.coinbase.com/v2/prices/${priceName}/buy`);
    }
    getResource() {
        return this;
    }
}

module.exports = CoinBaseService;
