import * as $ from 'jquery'
import { Person } from './person'

import './jquery-foo'

function f (x: number) {
   return x + x
}

function g (x: string) {
  return `X: ${x}`
}

const people = [
  new Person('John', 'Doe'),
  new Person('Jane', 'Smith'),
]

const o1 = { name: 'John' }
const o2 = { ...o1, age: 30 }

people.forEach(person => console.log(person))

declare global {
  interface JQuery {
    foo (): JQuery
  }
}

$('div').foo()
