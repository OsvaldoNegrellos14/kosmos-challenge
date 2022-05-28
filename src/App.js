import { useState, useEffect } from 'react';
import './App.css';
import data from './mocks/data.json';
import { RadioInput } from './components/RadioInput';
import { SelectInput } from './components/SelectInput';
import { TextInput } from './components/TextInput';


export const App = () => {

  const [listInputs, setListInputs] = useState([]);
  const [elementsForm, setElementsForm] = useState([]);
  useEffect(() => {
    setListInputs(data);
  }, [listInputs, elementsForm]);

  const addInputForm = (e, dataInput) => {
    e.preventDefault();
    const newElementsForm = {
      ...dataInput,
      id: Math.floor(Math.random() * 100)
    };
    setElementsForm([...elementsForm, newElementsForm]);
  }

  const removeInputForm = (e, index) => {
    e.preventDefault();
    setElementsForm(elementsForm.filter((item) => item.id !== index));
  }

  return (
    <div className="App">
      <div className="list-inputs">
        <h2>List Inputs</h2>
        {listInputs.map((item, index) => {
          if (item.type === 'radio') {
            return <RadioInput key={index} dataInput={item} addInputForm={addInputForm} />
          } else if (item.type === 'select') {
            return <SelectInput key={index} dataInput={item} addInputForm={addInputForm} />
          } else {
            return <TextInput key={index} dataInput={item} addInputForm={addInputForm} />
          }
        })}
      </div>
      <div className="form-inputs">
        <h2>Form preview</h2>

        {elementsForm.map((item, index) => {
          if (item.type === 'radio') {
            return <RadioInput key={index} dataInput={item} addInputForm={addInputForm} preview={true} removeInputForm={removeInputForm}/>
          } else if (item.type === 'select') {
            return <SelectInput key={index} dataInput={item} addInputForm={addInputForm} preview={true} removeInputForm={removeInputForm}/>
          } else {
            return <TextInput key={index} dataInput={item} addInputForm={addInputForm} preview={true} removeInputForm={removeInputForm}/>
          }
        })}
      </div>
    </div>
  );
}
