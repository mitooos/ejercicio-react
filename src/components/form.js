import React from 'react'
import Button from 'react-bootstrap/Button'
import useForm from '../customHooks/form'

const Form = (props) => {
  const { handleChange, handleSubmit, errors } = useForm(
    props.data,
    props.action,
    props.validateFunction
  )
  return (
    <form className='form' onSubmit={handleSubmit}>
      {props.data.map((item, i) => {
        const name = item.name
        return (
          <div key={i} className='form-group'>
            <label htmlFor={name}>{name}</label>
            <input
              type={item.type}
              id={name}
              name={name}
              className='form-control'
              placeholder={item.placeholder}
              onChange={handleChange}
            />

            {errors[name] && (
              <div className='text-danger'> {errors[name]} </div>
            )}
          </div>
        )
      })}
      <Button variant='success' type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default Form
