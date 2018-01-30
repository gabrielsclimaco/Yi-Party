import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import { Card } from '../Card';
import './ThirdStep.css';

class ThirdStep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [
        {placeholder: 'CEP', attribute: 'cep'},
        {placeholder: 'Local*', attribute: 'place'},
        {placeholder: 'Avenida/Rua*', attribute: 'street'},
        {placeholder: 'Número', attribute: 'number'},
        {placeholder: 'Complemento', attribute: 'complement'},
        {placeholder: 'Bairro', attribute: 'district'},
      ],
      showOnMaps: false,
    };

    this.renderInputs = this.renderInputs.bind(this);
    this.toggleState = this.toggleState.bind(this)
  }
  
  renderInputs() {
    return this.state.fields.map((field) => {
      return (
        <input
          onChange={e => {this.props.onFieldTyped({
            value: e.target.value,
            attribute: field.attribute
          })}}
          placeholder={field.placeholder}
          className='ThirdStep-formTitleInput'
          key={field.attribute}
        />
      );
    });
  }

  toggleState() {
    this.setState({showOnMaps: !this.state.showOnMaps});
  }

  render() {
    return (
      <Card className={this.props.className}>
        <div className='ThirdStep'>
          <span className='ThirdStep-number'>3</span>
          <div>
            <span className='ThirdStep-title'>ONDE?</span>
            <div className='ThirdStep-form'>
              <span>Cadastrar endereço*</span>
              <div>
                { this.renderInputs() }
              </div>
            </div>
            <div className='ThirdStep-mapCheckboxSection'>
              <span
                className='ThirdStep-mapCheckbox'
                onClick={this.toggleState}>
                <input type='checkbox' checked={this.state.showOnMaps} />
                <span>
                  <MaterialIcon
                    icon='check'
                    size={20}
                    color='white'
                  />
                </span>
              </span>
              <span>Vizualizar no Google Maps</span>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default ThirdStep;
