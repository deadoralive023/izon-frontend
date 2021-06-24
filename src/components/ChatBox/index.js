import React, {useEffect} from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
import consumer from '../../cable';
//import logo from './logo.svg';
 
export default function ChatBox() {
  consumer.subscriptions.create({
    channel: 'ChatChannel',
    username: 'falcons16',
    room_id: 1
  }, {
    connected: () => console.log('connected to webscoket!'),
    disconnected: () => console.log('disconnected'),
    received: (data) => {
      addResponseMessage(data);
      console.log(data)
    }
  })
  
  useEffect(() => {
    addResponseMessage('Hi How many we help you?');
    return () => {
      consumer.disconnect()
    };
  }, []);
 
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        content: newMessage,
        name: 'hamza'
      })
    })
  }
  return (
    <div className="App">
    <Widget
        handleNewUserMessage={handleNewUserMessage}
        //profileAvatar={logo}
        title="Support"
        subtitle="Do you have a query?"
    />
    </div>
  )
}