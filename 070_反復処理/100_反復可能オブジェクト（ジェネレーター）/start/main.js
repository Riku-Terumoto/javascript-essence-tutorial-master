const items = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
};

Object.prototype[Symbol.iterator] = function* () {
  for (const key in this) {
    yield [key, this[key]];
  }
};

for (const [k, v] of items) {
  console.log(k, v);
}
