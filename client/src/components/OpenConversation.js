import React, { useState, useCallback } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";

export default function OpenConversation() {
  const [text, setText] = useState("");
  const setRef = useCallback();
  const { sendMessage, selectedConversation } = useConversations();
  // const lastMessageRef = useRef()

  function handleSubmit(e) {
    e.preventDefault((node) => {
      if (node) {
        // lastMessageRef.current = node
        node.scrollIntoView({ smooth: true });
      }
    }, []);

    sendMessage(
      selectedConversation.recipients.map((recipient) => recipient.id),
      text
    );
    setText("");
  }

  // useEffect(() => {
  //     if(lastMessageRef.current){
  //         lastMessageRef.current.scrollIntoView({smooth : true})
  //     }
  // },[lastMessageRef.current])

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${
                  message.fromMe
                    ? "align-self-end align-items-end"
                    : "align-items-start"
                }`}
              >
                <div
                  className={`rounded px-2 py-1 ${
                    message.fromMe ? "bg-primary text-white" : "border"
                  }`}
                >
                  {message.text}{" "}
                </div>
                <div
                  className={`text-muted small ${
                    message.fromMe ? "text-right" : ""
                  }`}
                >
                  {message.fromMe ? "you" : message.senderName}{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit()}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={Text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
            />
            <InputGroup.append>
              <Button type="submit">Send</Button>
            </InputGroup.append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
