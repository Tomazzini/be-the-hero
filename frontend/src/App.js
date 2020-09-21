import React from 'react';
// JSX (javascript xml, conceito quando javascript retorna html ou quando html esta integrado dentro do javascript)
// componete no react é uma função que retorna html

import './global.css'

// importando a função de rotas
import Routes from './routes';

// função useState tem 2 parametros (valor default,arrayDeAtualização)
function App() {
  return (
    <Routes/>
    );
}

export default App;
