import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import {nanoid} from 'nanoid'

const AddTodo = ({addTodo}) => {
 
    const [content,setContent]=useState("")
    const toast = useToast()

    function handleSubmit(e){
       e.preventDefault();
        //  console.log(content)

        if(!content){
            toast({
                title: `No Content`,
                status: 'error',
                isClosable: true,
                duration:4000
              })
              return
        }
        
         const todo={
            id:nanoid(),
            body:content
         }
        //  console.log(todo)

        addTodo(todo);
        setContent("")
    }

   

  return (
   <form onSubmit={handleSubmit}>
      
      <HStack mt={8}>
        <Input variant={'filled'} placeholder='Learning ChakraUi with Todo App' value={content} onChange={(e)=>setContent(e.target.value)}/>
        <Button colorScheme='pink' px={"8"} type='submit'>Add Todo</Button>
      </HStack>
   </form>
  )
}

export default AddTodo


//installed a dependency called "nanoid" by "npm i nanoid" to provide id to each todo we are creating
/// "build": "react-scripts build",