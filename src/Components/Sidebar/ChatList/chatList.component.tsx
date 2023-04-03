import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChatItem from "./ChatItem/chatItem.component";
import styles from "./chatList.module.scss"
import { Conversation } from "../../../Classes/Conversation";
import { User } from "../../../Classes/User";
import { useChatListHook } from "./chatList.hook";
export default function ChatList() {

    const {
        conversations
    } = useChatListHook();


    return (
        <>
            <div className={styles.chat_list}>
                {
                    conversations.map((convo, index) => {
                        return <Link to={"/dashboard/chatbox"} state={{ chat: convo.user1.userName }} style={{ color: 'inherit', textDecoration: 'inherit' }}><ChatItem conversation={convo} /></Link>
                    })
                }
            </div>
        </>
    )
}