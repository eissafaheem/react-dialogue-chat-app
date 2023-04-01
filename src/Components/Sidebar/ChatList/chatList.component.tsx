import React from "react";
import { Link } from "react-router-dom";
import ChatItem from "./ChatItem/chatItem.component";
import styles from "./chatList.module.scss"
import { Conversation } from "../../../Classes/Conversation";
import { User } from "../../../Classes/User";
export default function ChatList() {

    let conversations: Conversation[] = [];
    let conversation = new Conversation("1",new User(1,"Eissa"),new User(2,"Rizwan"));
    conversations.push(conversation);


    return (
        <>
            <div className={styles.chat_list}>
                {
                    conversations.map((convo, index) => {
                        return <Link to={"/chatbox"} state={{ chat: convo.user2.username }} style={{ color: 'inherit', textDecoration: 'inherit' }}><ChatItem conversation={convo} /></Link>
                    })
                }
            </div>
        </>
    )
}