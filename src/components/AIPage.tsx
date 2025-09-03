"use client";

import { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaPlus, FaRobot } from "react-icons/fa";

interface Message {
  role: "user" | "ai";
  content: string;
  timestamp: number;
}

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Load chat history from localStorage
  useEffect(() => {
    const storedMessages = localStorage.getItem("ai_chat_history");
    if (storedMessages) {
      const parsedMessages: Message[] = JSON.parse(storedMessages);
      const now = Date.now();
      const filteredMessages = parsedMessages.filter(
        (msg) => now - msg.timestamp <= 7 * 24 * 60 * 60 * 1000
      );
      setMessages(filteredMessages);
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    localStorage.setItem("ai_chat_history", JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input, timestamp: Date.now() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulating AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        role: "ai",
        content: `AI: This is a simulated response to "${input}"`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-950 h-full p-4 flex flex-col border-r border-gray-800">
        {/* Logo */}
        <div className="text-2xl font-bold text-white flex items-center gap-2">
          <FaRobot className="text-blue-500" />
          GenzAi
        </div>

        {/* New Chat Button */}
        <button className="mt-4 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg text-sm">
          <FaPlus /> New Chat
        </button>

        {/* Recent Chats */}
        <div className="mt-6">
          <p className="text-gray-400 text-sm">Recent Chats</p>
          <div className="mt-2 flex flex-col space-y-2">
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg text-left text-sm">
              Workout Plan
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg text-left text-sm">
              Best Protein Sources
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg text-left text-sm">
              Cardio vs Strength
            </button>
          </div>
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col items-center justify-between">
        {/* Chat Messages */}
        <div className="w-full max-w-3xl flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`p-2 text-lg ${msg.role === "user" ? "text-gray-400" : "text-white"}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && <p className="text-gray-500">AI is typing...</p>}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Field */}
        <div className="w-full max-w-3xl p-4 bg-gray-800 flex items-center rounded-b-lg">
          <input
            type="text"
            className="flex-1 p-3 bg-gray-900 border border-gray-700 text-white rounded-lg outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="ml-3 p-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
          >
            <FaPaperPlane className="text-white" />
          </button>
        </div>
      </main>
    </div>
  );
}
