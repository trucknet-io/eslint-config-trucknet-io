// @flow
import React from 'react';
import { testImport, helloworld } from 'hello';
// eslint-disable-next-line no-console
console.log(helloworld, testImport);
// eslint-disable-next-line no-console
console.error('error log');

const a = 123;
// eslint-disable-next-line no-console
console.log(a);

const b = {
  a: 1,
  b: 2,
};
// eslint-disable-next-line no-console
console.log(b);

function testFn(a, b) {
  // eslint-disable-next-line no-console
  console.log(b);
  if (a) {
    return 123;
  } else {
    return 456;
  }
  // return 789;
}

testFn(1);

try {
  // eslint-disable-next-line no-console
  console.log(123);
} catch (_error) {
  // eslint-disable-next-line no-console
  console.log('error');
}

const obj = { a: 123 };
// eslint-disable-next-line no-console
console.log(obj);

const arr = [1, 2, 3];
// eslint-disable-next-line no-console
console.log(arr);

const Component = ({ a, b }) => (
  <h1 a="arr">
    <span style={{ border: 1 }}>{a + b}</span>
  </h1>
);

const t = 'sa';
// eslint-disable-next-line no-console
console.log(t);
// eslint-disable-next-line no-console
console.log(Component);

const p = [1, 2];
// eslint-disable-next-line no-console
console.log(p);
