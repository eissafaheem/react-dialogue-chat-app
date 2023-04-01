import React from "react";
import styles from "./newchat.module.scss"
export default function NewChat(props:any) {

    function handleAddChat() {
        props.setIsModalVisible(false);
    }

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