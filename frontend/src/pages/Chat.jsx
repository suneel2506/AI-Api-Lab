import ChatContainer from "../c/chat/ChatContainer";
import useAI from "../hooks/useAI";

function Chat() {
  const { messages } = useAI();

  return <ChatContainer messages={messages} />;
}

export default Chat;
