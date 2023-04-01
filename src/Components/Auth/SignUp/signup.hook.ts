import { useNavigate } from "react-router-dom";

export const useSignUpHook = () =>{
    
    let navigate = useNavigate();
    function handleSignUp(){
        navigate("/dashboard")
    }

    return {
        handleSignUp
    };
}