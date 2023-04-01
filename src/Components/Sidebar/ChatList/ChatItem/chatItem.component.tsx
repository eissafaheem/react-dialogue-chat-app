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
                    {props.conversation.user2.username}
                </div>
                <div className={styles.date}>
                    {props.conversation.user2.user_id}
                </div>
            </div>
        </div>
        </>
    )
}