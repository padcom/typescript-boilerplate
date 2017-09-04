import * as $ from 'jquery'
import { Person } from './person'

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

people.forEach(person => console.log(person))
