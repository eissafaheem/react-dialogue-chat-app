import React, { useState } from "react";
import ChatList from "./ChatList/chatList.component";
import styles from "./sidebar.module.scss"
export default function Sidebar(props:any) {

    return (
        <>
            <div className={styles.main_container}>
            <h1>Dialogue</h1>

                <button onClick={()=>props.setIsModalVisible(true)}>New Chat</button>

                <div className={styles.header}>
                    <input type="text" placeholder="Search chat" />
                </div>
                <div className={styles.content}>
                    <ChatList/>
                </div>
            </div>
        </>
    )
}