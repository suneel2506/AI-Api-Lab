function ChatMessage({ role, content }) {
    const isUser = role === "user";
  
    return (
      <div
        className={`mb-4 flex ${
          isUser ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`max-w-[75%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${
            isUser
              ? "bg-cyan-500 text-black"
              : "bg-slate-700 text-white"
          }`}
        >
          {content}
        </div>
      </div>
    );
  }
  
  export default ChatMessage;