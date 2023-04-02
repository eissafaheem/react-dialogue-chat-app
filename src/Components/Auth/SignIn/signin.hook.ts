import { useNavigate } from "react-router-dom";

export const useSigninHook = () =>{
    const navigate = useNavigate();
    
    function signInHandler(event:any){
        event.preventDefault();
        console.log(event.target.userId.value);
        console.log(event.target.password.value);
        
        navigate("/dashboard")
    }

    return {
        signInHandler
    };
}