# bitgrail
Cryptocurrency quotes sourced from BitGrail

## Install
```
$ npm install bitgrail --save
```

## Usage
```javascript

var bitgrail = require("bitgrail");

(async () => {
    try {
        let data = await bitgrail.getTicker("BTC-XRB");
        console.log(data);
    }
    catch (ex) {
        console.log('caught error:' + ex.stack);
    }
})();

```

## License
MIT license; see [LICENSE](./LICENSE).
