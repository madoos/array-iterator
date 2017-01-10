# madoos-array-iterator

Extends the instance of an array to behave like an iterator

## Getting Started

To install:

    npm i --save madoos-array-iterator

In your project:

``` javascript

const arrayIterator = require('madoos-array-iterator')

const arr = [1, 2, 3, 4, 5]
arrayIterator(arr)

while (arr.hasNext()) {
  console.log(arr.current())
  arr.next()
  // => 1
  // => 2
  // => 3
  // => 4
  // => 5
}

```

## Funtions

 * `.hasNext`
 * `.next`
 * `.prev`
 * `.current`