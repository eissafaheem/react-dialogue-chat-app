import React, { useState } from "react";
import ChatList from "./ChatList/chatList.component";
import styles from "./sidebar.module.scss"
import { useSidebarHook } from "./sidebar.hook";
export default function Sidebar(props: any) {

    const {
        handleLogout,
        handleSearch,
        searchedConversations,
        clearInput
    } = useSidebarHook();
    return (
        <>
            <div className={styles.main_container}>
                <h1>
                    <img src="/logo512.png" alt="" />
                    <span>
                        ialogue
                    </span>
                <div className={styles.logout} onClick={handleLogout}>Logout</div>
                </h1>

                <button onClick={() => props.setIsModalVisible(true)} className={styles.new_chat_btn}>New Chat</button>

                <div className={styles.header}>
                    <input type="text" placeholder="Search chat" onChange={(e)=>handleSearch(e)}/>
                    <div className={styles.search_button} onClick={()=>clearInput()}>Clear</div>
                </div>
                <div className={styles.content}>
                    <ChatList searchedConversations={searchedConversations}/>
                </div>
            </div>
        </>
    )
}