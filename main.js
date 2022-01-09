var actors = require('comedy');
var actorSystem = actors({
    resources: ["/service/CoinBaseService"]
  });


actorSystem
  .rootActor()
  // Create test actor.
  .then(rootActor => rootActor.createChild('/actors/PollerActor'))
  // Send a 'dumpCollection' message and wait for processing to finish.
  .then(pollerActor => pollerActor.send('pollCryptoPrice','BTC-EUR' ));
  