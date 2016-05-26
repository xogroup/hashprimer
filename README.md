# hashprimer

A javascript library for creating or updating javscript objects {} from an Array of key values.

A few builtin callbacks are available with this release:

```sh
hashprimer.increment : increment numerical value
hashprimer.array : create/append value to array
```

# Usage Example

```javascript
var hashprimer = require('hashprimer');
var hash = new hashprimer();

var OS = {};
hash.set(OS, 0.155, [ "AWS", "us-east-1a", "c4.xlarge", "cost" ]);
hash.set(OS, null, [ "AWS", "us-east-1a", "c4.xlarge", "count" ], hash.increment);
hash.set(OS, 10, [ "AWS", "us-east-1a", "c4.xlarge", "count" ], hash.increment);
hash.set(OS, 'i-a1b2b3c4', [ "AWS", "us-east-1a", "c4.xlarge", "instances" ], hash.array);
hash.set(OS, 'i-a4b3b2c1', [ "AWS", "us-east-1a", "c4.xlarge", "instances" ], hash.array);
hash.set(OS, null, [ "AWS", "us-east-1a", "c4.xlarge", "monthly_charge" ], function(hash, value) {
  return (OS.AWS['us-east-1a']['c4.xlarge'].cost * OS.AWS['us-east-1a']['c4.xlarge'].count * 24 * 30);
});

console.log(JSON.stringify(OS));

```

# Example Output

```
{
    "AWS": {
        "us-east-1a": {
            "c4.xlarge": {
                "cost": 0.155,
                "count": 11,
                "instances": [
                    "i-a1b2b3c4",
                    "i-a4b3b2c1"
                ],
                "monthly_charge": 1227.6000000000001
            }
        }
    }
}
```

### Version
1.0.4

### Installation

```sh
$ npm install hashprimer --save
```
### Development

Want to contribute? Great!

 - Write Tests
 - Add Code Comments

License
----

GPLv2

