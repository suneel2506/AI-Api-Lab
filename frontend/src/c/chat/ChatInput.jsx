import { useState } from "react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  }

  return (
    <div className="border-t border-slate-700 p-4">
      <div className="flex gap-3">

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button
          onClick={handleSend}
          className="
            rounded-lg
            bg-cyan-500
            px-6
            py-3
            font-semibold
            text-black
            hover:bg-cyan-400
          "
        >
          Send 🚀
        </button>

      </div>
    </div>
  );
}

export default ChatInput;