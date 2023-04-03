import { createContext, useContext } from "react";

export const StateManager = createContext(); 

export const DialogStates = () =>{
    const allData = useContext(StateManager);
    return allData;
}
