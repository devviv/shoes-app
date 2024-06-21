import React, {createContext, useContext, useEffect, useState} from "react";
import axiosInstance from "../api/axios";

const AuthContext = createContext()

export const useAuth = ()=>{
    return useContext(AuthContext);
}

export const AuthProvider = (children) => {

    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

    useEffect(() => {
        const authenticate = async () =>{
            if(!authToken){
               try{
                const response = await axiosInstance.post('login', {
                    email: "aamehole@gmail.com",
                    password: "password"
                });
                console.log(response);
                const token = response.data.token;
                localStorage.setItem('authToken', token);
                setAuthToken(token);
               } catch(error){
                    console.error("Erreur d'Authentification :", error);
               }
            }
        };
        authenticate()
    }, [authToken]);
    <AuthContext.Provider value= {authToken}>
        {children}
    </AuthContext.Provider>
}