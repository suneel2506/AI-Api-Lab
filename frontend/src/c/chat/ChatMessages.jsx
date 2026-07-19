import ChatMessage from "./ChatMessage";

function ChatMessages({ messages = [] }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">

      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}

    </div>
  );
}

export default ChatMessages;