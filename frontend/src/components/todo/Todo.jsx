import {Alert, Button, FormLabel, FormControl} from "react-bootstrap";
import { useState, useEffect } from "react";

const todos=[ 
  "Curso de React",
  "Aula da Faculdade",
  "Fazer compras",
  "Se Vacinar",
]



//Também posso usar desestruturação com Props

const  Todo = (props) =>{
  //useState- função do react para fazer um estado.
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);

  const onAddTodo = () => { 
    setTodos([...todos, name])
    setName('');
  };
  console.log("Rendered!");

  useEffect(() => {console.log("Página carregada, primeira vez! "); 
}, []);

  useEffect(() => {
    console.log("Todo adicionado!");
  }, [todos] );

  return(
    <div className="container mt-4">
        <h1>{props.title}</h1>
        {props.children}
        <div className="mb-3">
          <FormLabel htmlFor="exampleFormControlInput1">Oque você quer fazer hoje?</FormLabel>
          <FormControl 
            name="name"
            onChange = {(event) => {
               setName(event.target.value);
            }}
            type="text" 
            value={name}  
          />
          <Button 
            className="mt-2" 
            disabled={name.trim().length <= 3}
            onClick={() => 
              {(onAddTodo())}}>
            Adicionar Tarefa
          </Button>
        </div>

        <ul>
         {todos.map((todo, index)=>{ 
           return <li key={index}> {todo} </li>
         })}
        </ul>
       
    </div>
  );
}

export default Todo; 