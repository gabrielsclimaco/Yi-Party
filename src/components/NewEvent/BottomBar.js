import React from 'react';
import ButtonWithTopLabel from '../Button/ButtonWithTopLabel';
import './BottomBar.css';

function BottomBar(props) {
  return (
    <div className={`BottomBar ${props.className}`}>
      <ButtonWithTopLabel
        topLabel='Como ficou minha página?'
        buttonLabel='Pré-Visualizar'
        color='#7300FF'
      />
      <ButtonWithTopLabel
        topLabel='Deixar pra publicar mais tarde'
        buttonLabel='Salvar como rascunho'
        color='#FF0073'
      />
      <ButtonWithTopLabel
        topLabel='Quero publicá-lo agora!'
        buttonLabel='Salvar e Publicar'
        color='linear-gradient(90deg, #FF0073, #7300FF)'
      />
    </div>
  );
}

export default BottomBar;
