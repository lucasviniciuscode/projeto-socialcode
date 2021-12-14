import { Alert } from "react-bootstrap";
import React, { useEffect } from "react";
import Todo from '../components/todo/Todo';
import Header from '../components/header/Header'

const Homepage = () => {

return(
  <div>
      <Todo title="Lista de Atividades - Segunda-feira">
      <Alert variant="success"> Não esqueça de informar suas atividades, aqui! </Alert>
    </Todo>
    {/* <Todo title="Lista de Atividades - Terça-feira">
      <Alert variant="success"> Não esqueça de informar suas atividades, aqui!</Alert>
    </Todo>
    <Todo title="Lista de Atividades - Quarta-feira">
      <Alert variant="success"> Não esqueça de informar suas atividades, aqui! </Alert>
    </Todo> */}


  </div>
);
}

export default Homepage;