import io from "socket.io-client";

export default function App() {
  const [socket, setSocket] = useState(null);
  const [welcome, setWelcome] = useState(true);
  const [room, setRoom] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const handleWelcomeSubmit = (event) => {
    event.preventDefault();
    socket.emit("enter_room", roomName, () => {
      setWelcome(false);
      setRoom(true);
    });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-box">
          <img src="images/profile.png" className="img" alt="" />
          {welcome && (
            <form onSubmit={handleWelcomeSubmit}>
              <input
                type="text"
                placeholder="방 제목"
                required
                value={roomName}
                className="room-name"
              />
            </form>
          )}
          {room && (
            <div>
              <h2>{roomName}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
