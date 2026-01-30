import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]); // initialize as empty array

  const fetchChats = async () => {
    try {
      const { data } = await axios.get("/api/chat");
      setChats(data || []); // ensure it's always an array
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>
          <strong>{chat.chatName}</strong>
        </div>
      ))}
    </div>
  );
};

export default ChatPage;
