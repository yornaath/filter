
# filter

  Filtering arrays or objects.

## Installation

    $ component install gorillatron/filter

## Usage

```javascript

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function even( n ) { return n % 2 === 0 }

filter( numbers, even )
// -> [2, 4, 6, 8, 10]

```

### API

#### filter( collection, fn, context )

Collection can be either array or object. Fn will be run for each value in the collection and if it returns true
the value will be put in the returned array. The context parameter will be used to bind the this value of the fn.
   

## License

  MIT
