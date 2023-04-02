import { useEffect, useState } from "react";
import { Conversation } from "../../../Classes/Conversation";
import { User } from "../../../Classes/User";
import { conversationManagementService } from "../../../app.registration";

export const useChatListHook = () =>{
    
    const [conversations, setConversations] = useState<Conversation[]>([])
    let conversation1 = new Conversation("1",new User("eissa55","Eissa"),new User("rizwan23","Rizwan"));
    let conversation2 = new Conversation("2s",new User("rizwan23","Rizwan"),new User("eissa55","Eissa"));

    async function getAllConversations(userId: string){
        let conversationsArr = await conversationManagementService.getAllConversations(userId);
        setConversations(conversationsArr);

    }


    useEffect(()=>{
        getAllConversations("55")
    },[])

    return {
        setConversations,
        conversations
    };
}