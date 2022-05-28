import React from 'react'

export const SelectInput = ({dataInput, addInputForm, preview, removeInputForm}) => {
  return (
    <div>
      <label className='style-label'>Country </label>
      <div className="container-input">
        <select className='style-select' defaultValue={'Canada'}>
          <option value={"Mexico"}>Mexico</option>
          <option value={"Estados Unidos"}>Estados Unidos</option>
          <option value={"Canada"}>Canada</option>
        </select>
        {
          !preview 
            ? <button className='button-style' onClick={(e) => addInputForm(e, dataInput)}>Add to form</button>
            : <button className='button-delete-style' onClick={(e) => removeInputForm(e, dataInput.id)}>Remove to form</button>
        }
      </div>
    </div>

  )
}
