// import logo from './logo.svg';
import './App.css';
import {Heading, VStack,IconButton,useColorMode} from '@chakra-ui/react'
import {FaSun,FaMoon} from 'react-icons/fa'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useEffect, useState } from 'react';


function App() {


//   const initialTodos= [
//     {
//         id:1,
//         body:'get Bread'
//     },
//     {
//         id:2,
//         body:'get Butter'
//     },
//     {
//         id:3,
//         body:'get Milk'
//     }

// ]

const [todos,setTodos]=  useState(
  ()=> JSON.parse(localStorage.getItem('todos'))||[]
);

useEffect(()=>{
   localStorage.setItem('todos', JSON.stringify(todos))
},[todos])

function deleteTodo(id){
    const newTodos= todos.filter(todo=>{
      return todo.id!==id
    })
    setTodos(newTodos)
}

function addTodo(todo){
  setTodos([...todos,todo])
}

const { colorMode,toggleColorMode}=useColorMode()

  return (
    <VStack p={4}>
      <IconButton icon={colorMode==='light'? <FaSun/> : <FaMoon/>} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode}/>
      <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient={"linear(to-r,pink.500, pink.300, blue.500)"} bgClip={"text"}>Todo Application</Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <AddTodo addTodo={addTodo}/>
    </VStack>
   
  
  );
}

export default App;
