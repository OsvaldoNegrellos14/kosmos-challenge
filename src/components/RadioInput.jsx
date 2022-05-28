import React from 'react'

export const RadioInput = ({dataInput, addInputForm, preview, removeInputForm}) => {
  return (
    <div>
      <label className='style-label'>Gender</label>
      <div className="container-input">
        <div className='container-radio'>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Male"
                className='style-radio'
              />
              Male
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Female"
                className='style-radio'
              />
              Female
            </label>
          </div>
        </div>
        {
          !preview 
            ? <button className='button-style' onClick={(e) => addInputForm(e, dataInput)}>Add to form</button>
            : <button className='button-delete-style' onClick={(e) => removeInputForm(e, dataInput.id)}>Remove to form</button>
        }
      </div>
    </div>

  )
}
