import { Badge, HStack, IconButton, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react'
import {FaTrash} from 'react-icons/fa'
import React from 'react'

const TodoList = ({todos,deleteTodo}) => {
   console.log(todos)

   if(!todos.length){
    return(
        <Badge colorScheme='green' p={'4'} m={'4'} borderRadius={'lg'}>
            No Todos, yay!!!
        </Badge>
    )
   }
  return (
       <VStack divider={<StackDivider/>} borderColor='gray.100' borderWidth="2px" p={"4"} borderRadius='lg' w={'100%'} maxW={{base:'90vw' , sm:'80vw' , lg:'50vw' , xl:'40vw'}} alignItems={'stretch'}>
         {todos.map((todo)=>(
            <HStack key={todo.id}>
                <Text>{todo.body}</Text>
                <Spacer/>
                <IconButton icon={<FaTrash/>} isRound="true" onClick={()=>deleteTodo(todo.id)}/>
            </HStack>
         ))}
       </VStack>
  )
}

export default TodoList
