function ChatHeader() {
    return (
      <div className="flex items-center justify-between border-b border-slate-700 p-4">
        <div>
          <h2 className="text-xl font-bold text-white">
            🤖 AI Assistant
          </h2>
  
          <p className="text-sm text-slate-400">
            Chat with your favorite AI model.
          </p>
        </div>
  
        <div className="text-sm text-green-400">
          ● Online
        </div>
      </div>
    );
  }
  
  export default ChatHeader;