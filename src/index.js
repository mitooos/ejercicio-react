import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/form'

import 'bootstrap/dist/css/bootstrap.min.css'

import { validateForm1 } from './utils/validate'

const form1 = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'name'
  },
  {
    name: 'last name',
    type: 'text',
    placeholder: 'last name'
  },
  {
    name: 'age',
    type: 'number',
    placeholder: 'age'
  }

]

ReactDOM.render(
  <div className='container'>
    <h1>Forms</h1>

    <Form data={form1} action={(values) => console.log(values)} validateFunction={validateForm1} />
  </div>,
  document.getElementById('root')
)
