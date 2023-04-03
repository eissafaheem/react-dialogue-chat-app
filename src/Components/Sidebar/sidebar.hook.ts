import { useNavigate } from "react-router-dom";
import { DialogStates } from "../../StateManager/contextProvider";
import { Conversation } from "../../Classes/Conversation";
import { useState } from "react";

export const useSidebarHook = () =>{

    const navigate = useNavigate();
    function handleLogout(){
        navigate("/");
    }
    
    const {conversations, setConversations} = DialogStates();
    const [searchedConversations, setSearchedConversations] = useState<Conversation[]>([]);

    function handleSearch(event:any){
        let result:Conversation[] = []
        for(let i=0;i<conversations.length;i++){
            if(conversations[i].user1.userName.toLowerCase() === event.target.value){
                result = [...[conversations[i]], ...result]
                console.log(result);
            }
            
        }
        setSearchedConversations(result)
        console.log("Yes");
        console.log(searchedConversations);

    }

    return {
        handleLogout, 
        handleSearch,
        searchedConversations
    };
}