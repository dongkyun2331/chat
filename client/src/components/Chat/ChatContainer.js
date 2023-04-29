import React from "react";
import { useLocation } from "react-router-dom";
import Chat from "./Chat";

const ChatContainer = () => {
  const location = useLocation();

  if (!location.search) {
    // location.search가 정의되지 않은 경우, 빈 화면을 보여줍니다.
    return null;
  }

  return <Chat location={location} />;
};

export default ChatContainer;
