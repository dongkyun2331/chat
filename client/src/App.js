import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Join from "./components/Join";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Join} />
        <Route path="/chat" component={Chat} />
      </Routes>
    </Router>
  );
};

export default App;
