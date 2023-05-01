import React,{useState,useEffect,useContext} from "react";
import userContext from "../Contexts/UserContext/UserContext";

const useUser = ()=>{
    return useContext(userContext);
}



export default useUser;