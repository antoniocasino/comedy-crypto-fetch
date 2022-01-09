class PriceRequestorActor {
    
    static inject() {
      return ["CoinBaseService"];
    }
    
    constructor(service) {
      this.service = service;
    }

    getCryptoPrice(currency){
        return this.service.getCryptoPrice(currency)
        .then(res=>res.json().then(console.log));
    }
    
}

module.exports = PriceRequestorActor;