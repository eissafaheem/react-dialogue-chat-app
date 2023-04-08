import { useEffect, useState } from "react";
import { Conversation } from "../../../Classes/Conversation";
import { User } from "../../../Classes/User";
import { conversationManagementService } from "../../../app.registration";
import { DialogStates } from "../../../StateManager/contextProvider";

export const useChatListHook = () =>{
    
    const {conversations,setConversations} = DialogStates();
    async function getAllConversations(userId: string){
        let conversationsArr = await conversationManagementService.getAllConversations(userId);
        setConversations(conversationsArr);
    }


    useEffect(()=>{
        getAllConversations("55")
    },[])

    return {
        conversations
    };
}