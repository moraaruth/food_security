import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Style.css';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('YOUR_SERVER_URL');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [socket]);

  const handleSendMessage = (event) => {
    event.preventDefault();

    if (newMessage.trim() !== '') {
      const message = {
        text: newMessage,
        sender: 'Buyer',
        timestamp: new Date().toISOString(),
      };

      socket.emit('message', message);

      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="messaging-system-container">
      <h2>Talk to us</h2>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender.toLowerCase()}`}>
            <p>{message.text}</p>
            <span>{message.timestamp}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default Message;
