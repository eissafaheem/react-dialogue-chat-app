import { useState } from "react";
import { StateManager } from "./contextProvider";
import { Conversation } from "../Classes/Conversation";

export const StateProvider = (props:any) =>{
    
    const [conversations, setConversations] = useState<Conversation[]>([]);
    
    const allData = {
        conversations,
        setConversations
    }
    return (
        <StateManager.Provider value={allData}>
            {props.children}
        </StateManager.Provider>
    );
}