import { useNavigate } from "react-router-dom";

export const useSidebarHook = () =>{

    const navigate = useNavigate();
    function handleLogout(){
        navigate("/");
    }

    return {
        handleLogout  
    };
}