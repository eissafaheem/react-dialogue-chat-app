import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './Components/Sidebar/sidebar.component';
import ChatBox from './Components/ChatBox/chatBox.component';
import { BrowserRouter } from 'react-router-dom'
import { Routes ,Route } from 'react-router-dom';
import NewChat from './Components/Sidebar/NewChatModal/newchat.component';
function App() {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className='main_container'>
      {
        isModalVisible && <NewChat setIsModalVisible={setIsModalVisible}/>
      }
      <BrowserRouter>
      <div className="sidebar">
        <Sidebar setIsModalVisible={setIsModalVisible}/>
      </div>

      <div className="chatbox">
        <Routes>
          <Route path='/chatbox' element={<ChatBox/>}/>
          <Route path='/' element={
            <div style={{color:"black", display:"flex", alignItems:"center", justifyContent:"center", height:"100%"}}>
              No Chat Selected
            </div>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
