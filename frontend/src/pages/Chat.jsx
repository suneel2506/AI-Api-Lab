import { useState } from "react";
import ChatContainer from "../c/chat/ChatContainer";

function Chat() {
  const [messages, setMessages] = useState([]);

  function handleSend(text) {
    const newMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, newMessage]);
  }

  return <ChatContainer messages={messages} onSend={handleSend} />;
}

export default Chat;
