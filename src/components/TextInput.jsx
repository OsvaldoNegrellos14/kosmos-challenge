import React from 'react'

export const TextInput = ({dataInput, addInputForm, preview, removeInputForm}) => {
  return (
    <div>
      <label className='style-label'>Name </label>
      <div className="container-input">
        <input type="text" className='style-input' placeholder="Enter your name" />
        {
          !preview 
            ? <button className='button-style' onClick={(e) => addInputForm(e, dataInput)}>Add to form</button>
            : <button className='button-delete-style' onClick={(e) => removeInputForm(e, dataInput.id)}>Remove to form</button>
        }
      </div>
    </div>
  )
}
