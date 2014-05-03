# empty-object

### Usage

```js
var empty = require('empty-object');

var bar = Object.create(null);
bar.b = 2;
bar.c = 3;
empty(bar);

var foo = Object.create({ name: 'smith' });
empty(foo);
```

### License

MIT
