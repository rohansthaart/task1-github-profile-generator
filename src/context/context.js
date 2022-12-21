import React, { useState,useContext } from 'react';
import axios from 'axios';

const url = `https://api.github.com/users/`;

const GithubContext = React.createContext();

export const GithubProvider = ({children})=>{
        const [isLoading,setIsLoading] = useState(false);
        const [user,setUser] = useState();
        const [inputText,setInputText] = useState('')
        const [notFound,setNotFound] = useState(true)
const fetchUser  = async (url)=>{
    setIsLoading(true)
    try{
        const response = await axios.get(url)
        const user= await response.data
        setIsLoading(false)
        setNotFound(false)
        setUser(user)
        return true
   
    }catch(error){
        setNotFound(true)
        console.log(notFound)
    }
}



return (
    <GithubContext.Provider value={{user,isLoading,setInputText,fetchUser,notFound}}>
        {children}
    </GithubContext.Provider>
)


}

export const useGithubContext = ()=>{
    return useContext(GithubContext)
}