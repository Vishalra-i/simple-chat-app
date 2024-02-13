// apiConfig.js
let baseUrl;
let socketUrl;

if (import.meta.env.VITE_NODE_ENV === "production") {
  baseUrl = "https://swift-chat-app-z08h.onrender.com/";
  socketUrl = "wss://swift-chat-app-z08h.onrender.com/";
} else {
  baseUrl = "http://localhost:4000";
  socketUrl = "ws://localhost:4000";
}

export { baseUrl, socketUrl };
