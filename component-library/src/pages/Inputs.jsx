import React from 'react'
import Input from '../components/Input'

const Inputs = () => {
  return (
    <div className='input_page'>
      <h1>Inputs</h1>
      <div className="inputs">
        <div className="row">
          <pre> &#60;Input /&#62;</pre>
          <Input />
        </div>
        <div className="row">
          <pre> &#60;Input error/&#62;</pre>
          <Input error />
        </div>
        <div className="row">
          <pre> &#60;Input disabled/&#62;</pre>
          <Input disabled />
        </div>
        <div className="row">
          <pre> &#60;Input helperText="Some interesting text" /&#62;</pre>
          <Input helperText="Some interesting text" />
        </div>
        <div className="row">
          <pre> &#60;Input helperText="Some interesting text" error /&#62;</pre>
          <Input helperText="Some interesting text" error />
        </div>
        <div className="row">
          <pre> &#60;Input startIcon="call" /&#62;</pre>
          <Input startIcon="call" />
        </div>
        <div className="row">
          <pre> &#60;Input endIcon="lock" /&#62;</pre>
          <Input endIcon="lock" />
        </div>
        <div className="row">
          <pre> &#60;Input value="text" /&#62;</pre>
          <Input value="text" />
        </div>
        <div className="row">
          <pre> &#60;Input size="sm" /&#62;</pre>
          <Input size="sm" />
        </div>
        <div className="row fw">
          <pre> &#60;Input fullWidth value="text" /&#62;</pre>
          <Input fullWidth value="text" />
        </div>
        <div className="row">
          <pre> &#60;Input multiLine row="4"/&#62;</pre>
          <Input multiline row="4"/>
        </div>
      </div>
    </div>
  )
}

export default Inputs