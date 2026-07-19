import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

function ChatContainer({ messages, onSend }) {
  return (
    <div
      className="
        flex
        h-[700px]
        flex-col
        rounded-xl
        border
        border-slate-700
        bg-slate-900
      "
    >
      <ChatHeader />

      <ChatMessages messages={messages} />

      <ChatInput onSend={onSend} />
    </div>
  );
}

export default ChatContainer;
