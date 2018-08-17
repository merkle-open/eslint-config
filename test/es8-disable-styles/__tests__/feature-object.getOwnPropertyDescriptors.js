/* eslint require-jsdoc: 0*/
/* eslint no-unused-vars: 0*/

const obj = {
  hello: "world",
  user: "turing"
}
const clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
