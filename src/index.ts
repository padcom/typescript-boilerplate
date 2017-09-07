import './fonts/icons/icons.font'

import { Person } from './person'

const people = [
  new Person('John', 'Doe'),
  new Person('Jane', 'Smith'),
]

people.forEach(person => console.log(person.name))

import * as $ from 'jquery'
import './jquery-foo'

$('div').foo({ color: 'red' })

import { f } from './functions'

console.log(f(2))
