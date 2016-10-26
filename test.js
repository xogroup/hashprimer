const test = require('tape');
const hashprimer = require('./hashprimer');

test('sets the value in a nested key', (t) => {
  const hash = new hashprimer();
  const obj = {};

  t.plan(1);

  hash.set(obj, 'value', ['a', 'b', 'c']);

  t.equal(obj.a.b.c, 'value');
});

test('increments a nested counter', (t) => {
  const hash = new hashprimer();
  const obj = {};

  t.plan(2);

  hash.set(obj, null, ['a', 'b', 'c'], hash.increment);
  hash.set(obj, null, ['a', 'b', 'c'], hash.increment);
  hash.set(obj, null, ['a', 'b', 'c'], hash.increment);

  t.equal(obj.a.b.c, 3);

  hash.set(obj, 10, ['a', 'b', 'c'], hash.increment);

  t.equal(obj.a.b.c, 13);
});


test('pushes elements in nested array', (t) => {
  const hash = new hashprimer();
  const obj = {};

  t.plan(1);

  hash.set(obj, 1, ['a', 'b', 'c'], hash.array);
  hash.set(obj, 2, ['a', 'b', 'c'], hash.array);
  hash.set(obj, 3, ['a', 'b', 'c'], hash.array);

  t.deepEqual(obj.a.b.c, [1, 2, 3]);
});
