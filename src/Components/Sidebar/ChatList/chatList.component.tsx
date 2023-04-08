import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChatItem from "./ChatItem/chatItem.component";
import styles from "./chatList.module.scss"
import { Conversation } from "../../../Classes/Conversation";
import { User } from "../../../Classes/User";
import { useChatListHook } from "./chatList.hook";
import { DialogStates } from "../../../StateManager/contextProvider";
export default function ChatList(props:any) {

    
    const {conversations} = useChatListHook();

    return (
        <>
            <div className={styles.chat_list}>
                {   props.searchedConversations.length ? 
                    props.searchedConversations.map((convo:Conversation, index:number) => {
                        return <Link to={"/dashboard/chatbox"} key={index} state={{ userName: convo.user1.userName, userId:convo.user1.userId }} style={{ color: 'inherit', textDecoration: 'inherit' }}><ChatItem conversation={convo} /></Link>
                    })
                    :
                    conversations.map((convo:Conversation, index:number) => {
                        return <Link to={"/dashboard/chatbox"} key={index} state={{ userName: convo.user1.userName, userId:convo.user1.userId }} style={{ color: 'inherit', textDecoration: 'inherit' }}><ChatItem conversation={convo} /></Link>
                    })
                
                }
            </div>
        </>
    )
}