import React from "react";
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './LoginForm'
import ChatFeed from './ChatFeed'

const ChatUI = () => {
 if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="abada2a3-5e45-47b6-bc41-a419b7f22dac"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderchatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default ChatUI