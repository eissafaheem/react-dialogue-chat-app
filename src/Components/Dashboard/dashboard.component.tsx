import { useState } from "react";
import NewChat from "../Sidebar/NewChatModal/newchat.component";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar.component";
import styles from './dashboard.module.scss'
import ChatBox from "../ChatBox/chatBox.component";
export function Dashboard(){

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
      <div className={styles.main_container}>
        {
        isModalVisible && <NewChat setIsModalVisible={setIsModalVisible}/>
      }
      <div className={styles.sidebar}>
        <Sidebar setIsModalVisible={setIsModalVisible}/>
      </div>

      <div className={styles.chatbox}>
        <Outlet/>
      </div>

      </div>
    );
}