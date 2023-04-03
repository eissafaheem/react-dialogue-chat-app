import React from "react";
import styles from "./chatItem.module.scss"

export default function ChatItem(props:any) {

    return (
        <>
        <div className={styles.item_container}>
            <div className={styles.left}>
                <div className={styles.profile}>

                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.name}>
                    {props.conversation.user1.userName}
                </div>
                <div className={styles.date}>
                    {props.conversation.user1.userId}
                </div>
            </div>
        </div>
        </>
    )
}