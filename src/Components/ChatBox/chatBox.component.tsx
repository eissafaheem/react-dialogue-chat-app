import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./chatBox.module.scss"
import { useChatBoxHook } from "./chatBox.hook";
export default function ChatBox(props: any) {

    const {
        handleSubmit,
        chats,
        setChats,
        msg,
        setMsg,
        loadAllChats
    } = useChatBoxHook(props);

    const msgRef = React.useRef<null | HTMLDivElement>(null);
    const location = useLocation()
    const { userName, userId } = location.state

    useEffect(()=>{
        loadAllChats(userId);
    },[])

    useEffect(() => {
        msgRef.current?.scrollIntoView();
    }, [chats])

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.header}>
                    <div className={styles.profile}>

                    </div>
                    <div className={styles.name}>
                        {userName} {userId}
                    </div>
                </div>
                <div className={styles.content}>

                    {
                        chats.map((chat: any, index: any) => {
                            let isSender = chat.sender.userId=="102"?true:false
                            return (
                                <div key={index} className={isSender ? styles.senderChat : styles.recieverChat}>
                                    <div>
                                        <span>
                                            {chat.messageText}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div ref={msgRef}></div>

                </div>
                <form className={styles.footer} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Type your message here..."
                        onChange={(e) => {
                            setMsg(e.target.value)
                        }} />
                    <button>Send</button>
                </form>
            </div>
        </>
    )
}