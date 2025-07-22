import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([
    { from: "bot", text: "Assalamualaikum! Ask anything about Rizwan." },
  ]);

  const answers = {
    age: "Rizwan is 21 years old.",
    education: "ICS from Base D.G. Khan and BSCS from PMAS Arid University Rawalpindi.",
    location: "He lives in Lahore.",
    current: "He's currently freelancing.",
    urdu: "Main Muhammad Rizwan hoon, Lahore ka freelance developer.",
  };

  const getAnswer = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes("age") || lower.includes("umar")) return answers.age;
    if (lower.includes("study") || lower.includes("parhai")) return answers.education;
    if (lower.includes("location") || lower.includes("kahan")) return answers.location;
    if (lower.includes("ab") || lower.includes("current")) return answers.current;
    return answers.urdu;
  };

  const handleSend = (e) => {
    e.preventDefault();
    const input = e.target.message.value;
    setChat([...chat, { from: "user", text: input }, { from: "bot", text: getAnswer(input) }]);
    e.target.reset();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 border rounded-lg shadow-lg p-4 w-72">
          <div className="mb-2 font-bold">Chat with RizwanBot 🤖</div>
          <div className="h-40 overflow-y-auto text-sm mb-2 space-y-1">
            {chat.map((msg, i) => (
              <div key={i} className={msg.from === "user" ? "text-right" : "text-left"}>
                <span className="inline-block px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">{msg.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex gap-1">
            <input name="message" className="flex-grow p-1 rounded border dark:bg-gray-700" required />
            <button type="submit" className="bg-purple-500 text-white px-2 rounded">→</button>
          </form>
        </div>
      ) : null}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full mt-2"
      >
        💬
      </button>
    </div>
  );
};

export default Chatbot;
