import { Conversation } from "../../../Classes/Conversation";
import { User } from "../../../Classes/User";
import { DialogStates } from "../../../StateManager/contextProvider";

export const useNewChatHook = (props:any) =>{
    
    let {conversations,setConversations} = DialogStates();
 
    function handleAddChat() {
        let newConversation = [new Conversation("afd", new User("34","Birju","daf"), new User("35","Babloo","sdf"))];
        setConversations([...newConversation, ...conversations]);
        props.setIsModalVisible(false);
    }

    return {
        handleAddChat
    };
}