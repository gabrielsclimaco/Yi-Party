import React from 'react';
import { Card } from '../Card';
import './ThirdStep.css';

function ThirdStep(props) {
  const fields = [
    {placeholder: 'CEP', attribute: 'cep'},
    {placeholder: 'Local*', attribute: 'place'},
    {placeholder: 'Avenida/Rua*', attribute: 'street'},
    {placeholder: 'Número', attribute: 'number'},
    {placeholder: 'Complemento', attribute: 'complement'},
    {placeholder: 'Bairro', attribute: 'district'},
  ]
  
  const renderInputs = () => {
    return fields.map((field) => {
      return (
        <input
          onChange={e => {props.onFieldTyped({
            value: e.target.value,
            attribute: field.attribute
          })}}
          placeholder={field.placeholder}
          className='ThirdStep-formTitleInput'
        />
      );
    });
  }

  return (
    <Card className={props.className}>
      <div className='ThirdStep'>
        <span className='ThirdStep-number'>3</span>
        <div>
          <span className='ThirdStep-title'>ONDE?</span>
          <div className='ThirdStep-form'>
            <span>Cadastrar endereço*</span>
            <div>
              {renderInputs()}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ThirdStep;
