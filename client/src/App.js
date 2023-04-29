import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatContainer from "./components/Chat/ChatContainer";
import Join from "./components/Join/Join";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<ChatContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
