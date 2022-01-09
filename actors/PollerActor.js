class PollerActor {
    /**
     * Actor initialization logic.
     *
     * @param selfActor Self actor instance.
     */
    initialize(selfActor) {      
      this.selfActor = selfActor;
    }      
    pollCryptoPrice(currency){
      this.selfActor.createChild("/actors/PriceRequestorActor")
      .then(priceRequestActor => setInterval(()=>priceRequestActor.send('getCryptoPrice',currency),3000));  
    }
  }

  module.exports = PollerActor;