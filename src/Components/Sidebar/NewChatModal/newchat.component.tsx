import React from "react";
import styles from "./newchat.module.scss"
import { useNewChatHook } from "./newchat.hook";
export default function NewChat(props:any) {

    let {handleAddChat} = useNewChatHook(props);

    return (
        <>
            <div className={styles.modal_container}>
                <h1>
                    Enter User Id of new chat
                </h1>
                <input type="text" placeholder="Reiever's userId" />
                <button onClick={handleAddChat}>Add Chat</button>
            </div>
        </>
    )
}