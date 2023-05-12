import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

export default function OpenConversation() {

    const [text, setText] = useState('')
    const {sendMessage, selectedConversation} = useConversations()

    function handleSubmit(e) { 
        e.preventDefault()

        sendMessage(selectedConversation, recipients.map(recipient => recipient.id), text)
        setText('')
    }

  return (
    <div className="d-flex flex-column flex-grow-1">
        <div className="flex-grow-1 overflow-auto">

        </div>
        <Form onSubmit={handleSubmit()}>
            <Form.Group className='m-2'>
               <InputGroup>
               <Form.Control as = "textarea" required value={Text} 
               onChange={e => setText(e.target.value)}
               style={{ height : "75px", resize : "none"}}
               />
               <InputGroup.append>
               <Button type='submit'>Send</Button>
               </InputGroup.append>
               </InputGroup>
            </Form.Group>
        </Form>
    </div>
  )
}
