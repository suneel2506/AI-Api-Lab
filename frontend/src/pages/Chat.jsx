import ChatContainer from "../c/chat/ChatContainer";
import useAI from "../hooks/useAI";

function Chat() {
  const {
    messages,
    sendMessage,
  } = useAI();

  return (
    <ChatContainer
      messages={messages}
      onSend={sendMessage}
    />
  );
}

export default Chat;