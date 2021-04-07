import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
 if(!localStorage.getItem('username')) return <LoginForm />

 return (
  <ChatEngine 
   height="100vh"
   projectID="abada2a3-5e45-47b6-bc41-a419b7f22dac"
   userName={localStorage.getItem('username')}
   userSecret={localStorage.getItem('password')}
   renderchatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />} 
  />
 )
}

export default App;