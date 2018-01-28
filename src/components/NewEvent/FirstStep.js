import React from 'react';
import { Card } from '../Card';
import './FirstStep.css';

function FirstStep(props) {
  return (
    <Card>
      <div className='FirstStep' >
        <span className='FirstStep-number'>1</span>
        <div>
          <span className='FirstStep-title'>NOME E IMAGEM DO EVENTO</span>
          <div className='FirstStep-form'>
            <div className='FirstStep-formTitle'>
              <span>Nome do evento*</span>
              <input
                onChange={e => {props.onTitleTyped(e.target.value)}}
                className='FirstStep-formTitleInput'
              />
            </div>
            <div className='FirstStep-image'>
              <div className='FirstStep-formImage'>
                <span>Incluir banner ou logo</span>
                <div className='FirstStep-formImageButton'>
                  <div className='FirstStep-formImageLabel'>Escolher arquivo</div>
                  <input
                    className='FirstStep-formImageInput'
                    type='file'
                    onChange={e => {props.onFileSelected(e.target.files[0])}}
                  />
                </div>
              </div>
            </div>
            <div className="FirsStep-message">
              <span className='message'>
                A imagem escolhida deve estar em formato JPG, GIF, ou PNG
                e ter no máximo 2MB. A dimensão recomendada é de 1200 x 444
                pixels. Imagens com altura ou largura diferentes destas podem
                ser redimensionadas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FirstStep;
