import React, { useEffect } from "react";
import { messageManagementService } from "../../app.registration";
import { Message } from "../../Classes/Message";
import { User } from "../../Classes/User";

export const useChatBoxHook = (props:any) =>{
    

    let [chats, setChats]:any[] = React.useState<Message[]>([]);
    const [msg,setMsg]:any = React.useState<Message>(new Message());

    const handleSubmit =  (e:any)=>{
        e.preventDefault();
        let newMessage = new Message("dg", new User("102","Babloo","babloo56"),new User("345","Pappu","5t56"),msg);
        let tempArr = [...chats,...[newMessage]];
        setChats(tempArr)
        e.target.reset()
        setMsg(undefined)
    }
    
    async function loadAllChats(userId:string){
        const allChats = await messageManagementService.getAllMessages(userId);
        setChats(allChats);
        console.log("EE"+chats);

    }

    return {
        handleSubmit,
        chats,
        setChats,
        msg,
        setMsg,
        loadAllChats
    };
}