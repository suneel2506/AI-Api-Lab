function ChatInput() {
    return (
      <div className="border-t border-slate-700 p-4">
        <div className="flex gap-3">
  
          <input
            type="text"
            placeholder="Type your message..."
            className="
              flex-1
              rounded-lg
              border
              border-slate-600
              bg-slate-800
              px-4
              py-3
              text-white
              outline-none
            "
          />
  
          <button
            className="
              rounded-lg
              bg-blue-600
              px-6
              text-white
              hover:bg-blue-500
            "
          >
            Send 🚀
          </button>
  
        </div>
      </div>
    );
  }
  
  export default ChatInput;