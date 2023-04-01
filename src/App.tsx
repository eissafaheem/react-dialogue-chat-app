import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './Components/Sidebar/sidebar.component';
import ChatBox from './Components/ChatBox/chatBox.component';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import NewChat from './Components/Sidebar/NewChatModal/newchat.component';
import Signin from './Components/Auth/SignIn/signin.component';
import SignUp from './Components/Auth/SignUp/signup.component';
import { Dashboard } from './Components/Dashboard/dashboard.component';
function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="chatbox" element={<ChatBox />} />
          <Route path={''} element={
            <div style={{ color: "black", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
              No Chat Selected
            </div>} />

        </Route>
        <Route path="/" element={<Signin />}>

        </Route>
        <Route path="/signup" element={<SignUp />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
