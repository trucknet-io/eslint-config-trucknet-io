// @flow
import React from 'react';
import { testImport, helloworld } from 'hello';

console.log(helloworld, testImport);

const a = 123;
console.log(a);

const b = {
  a: 1,
  b: 2,
};

console.log(b);

function testFn (a, b) {
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
  console.log(123);
} catch (_error) {
  console.log('error');
}

const obj = { a: 123 };
console.log(obj);

const arr = [
  1,
  2,
  3,
];
console.log(arr);

const Component = ({ a, b }) => (
  <h1 a="arr">
    <span
      style={{ border: 1 }}>
      {a + b}
    </span>
  </h1>
);

const t = 'sa';
console.log(t);
console.log(Component);

const p = [1, 2];
console.log(p);
