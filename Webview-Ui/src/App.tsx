import { useEffect, useState } from "react";

interface VSCodeMessage {
  type: "ping" | "pong";
  text: string;
}

declare const acquireVsCodeApi: () => {
  postMessage(message: VSCodeMessage): void;
};

const vscode = acquireVsCodeApi();

function App() {
  const [msg, setMsg] = useState("No message yet");

  const sendPing = () => {
    vscode.postMessage({
      type: "ping",
      text: "Hello from React ui",
    });
  };

  useEffect(() => {
    const handler = (event: MessageEvent<VSCodeMessage>) => {
      if (event.data.type === "pong") {
        setMsg(event.data.text);
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-bold mb-4">Spotify Sidebar Test</h1>

      <button
        onClick={sendPing}
        className="bg-green-500 px-4 py-2 rounded"
      >
        Send Ping to Extension
      </button>

      <p className="mt-4">Reply: {msg}</p>
    </div>
  );
}

export default App;
