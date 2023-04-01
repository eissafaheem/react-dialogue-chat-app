import { useNavigate } from "react-router-dom";

export const useSigninHook = () =>{
    const navigate = useNavigate();
    
    function signInHandler(){
        navigate("/dashboard")
    }

    return {
        signInHandler
    };
}