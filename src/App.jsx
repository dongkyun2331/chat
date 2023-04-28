import React from "react";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-box">
          <img src="images/profile.png" className="img" alt="" />
          <div className="welcome">
            <form>
              <input
                type="text"
                placeholder="방 제목"
                required
                className="room-name"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
