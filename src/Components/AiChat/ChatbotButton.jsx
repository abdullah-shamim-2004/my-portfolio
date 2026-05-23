import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import { MessageCircle, X } from "lucide-react";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState("");
  return (
    <>
      {/* Floting Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-7 z-40 w-[380px] h-[520px] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
          <ChatWindow />
        </div>
      )}
      {/* Toggle Button */}
      <button
        className="fixed bottom-7 lg:bottom-12 right-5 md:right-15 lg:right-50 w-fit h-12 px-2 rounded-2xl  text-white shadow-sm flex gap-2 items-center justify-center transition-all"
        aria-label="Toggle chat"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <span className="bg-blue-500 hover:bg-blue-600 shadow-2xl p-2.5 rounded-2xl">
            <X size={22} />
          </span>
        ) : (
          <span className="flex bg-blue-500 hover:bg-blue-600 p-2.5 rounded-2xl">
            <MessageCircle size={22} />
            <p className="ml-1">Ask Anything</p>
          </span>
        )}
      </button>
    </>
  );
};

export default ChatbotButton;
