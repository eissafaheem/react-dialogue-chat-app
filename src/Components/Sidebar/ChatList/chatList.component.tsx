import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChatItem from "./ChatItem/chatItem.component";
import styles from "./chatList.module.scss"
import { Conversation } from "../../../Classes/Conversation";
import { User } from "../../../Classes/User";
export default function ChatList() {

    const [conversations, setConversations] = useState<Conversation[]>([])
    // let conversations: Conversation[] = [];
    let conversation1 = new Conversation("1",new User("eissa55","Eissa"),new User("rizwan23","Rizwan"));
    let conversation2 = new Conversation("2s",new User("rizwan23","Rizwan"),new User("eissa55","Eissa"));
    // conversations.push(conversation1);
    // conversations.push(conversation2);

    useEffect(()=>{
        setConversations([conversation1,conversation2]);

    },[])


    return (
        <>
            <div className={styles.chat_list}>
                {
                    conversations.map((convo, index) => {
                        return <Link to={"/dashboard/chatbox"} state={{ chat: convo.user2.userName }} style={{ color: 'inherit', textDecoration: 'inherit' }}><ChatItem conversation={convo} /></Link>
                    })
                }
            </div>
        </>
    )
}