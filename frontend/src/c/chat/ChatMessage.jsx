function ChatMessage({ role, content }) {
    const isUser = role === "user";
  
    return (
      <div
        className={`flex mb-4 ${
          isUser ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`
            max-w-[80%]
            rounded-2xl
            px-4
            py-3
            whitespace-pre-wrap
            ${
              isUser
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-slate-100"
            }
          `}
        >
          {content}
        </div>
      </div>
    );
  }
  
  export default ChatMessage;