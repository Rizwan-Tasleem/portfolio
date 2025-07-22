import React from "react";
import Chatbot from "./components/Chatbot";
import "./index.css";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition duration-500">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Muhammad Rizwan Tasleem</h1>
        <p className="text-lg mb-6">Freelance Developer | BSCS Graduate | AI Enthusiast</p>

        <h2 className="text-2xl font-semibold mt-8">About Me</h2>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>Age: 21</li>
          <li>Education: ICS from Base D.G. Khan, BSCS from Arid University</li>
          <li>Location: Lahore</li>
          <li>Current Work: Freelancing</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Skills</h2>
        <p className="mt-2">HTML, CSS, JavaScript, Python</p>

        <h2 className="text-2xl font-semibold mt-8">Projects</h2>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>Fake Job Detection</li>
          <li>Cricket Kit Detection</li>
        </ul>
      </div>
      <Chatbot />
    </div>
  );
}

export default App;
