import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./chatBox.module.scss"
export default function ChatBox(props:any) {

    let isSender = true;
    let [chats, setChats]:any[] = React.useState([]);
    const [msg,setMsg]:any = React.useState("");
    let handleSubmit=(e:any)=>{
        e.preventDefault();
        console.log("onsubmit");
        let tempArr = [...chats,...[msg]];
        setChats(tempArr)
        e.target.reset()
    }

    const msgRef = React.useRef<null | HTMLDivElement>(null);   
    const location = useLocation()
    const { chat } = location.state
    useEffect(()=>{
        msgRef.current?.scrollIntoView();
    },[chats])

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.header}>
                    <div className={styles.profile}>

                    </div>
                    <div className={styles.name}>
                        {chat}
                    </div>
                </div>
                <div className={styles.content}>

                    {
                        chats.map((chat:any, index:any) => {
                            isSender = !isSender
                            return (
                                <div key={index} className={isSender ? styles.senderChat : styles.recieverChat}>
                                    <div>
                                        <span>
                                            {chat}
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
                    onChange={(e)=>{
                        setMsg(e.target.value)
                    }}/>
                    <button>Send</button>
                </form>
            </div>
        </>
    )
}