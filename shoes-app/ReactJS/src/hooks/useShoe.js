import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";


const fetchtShoes = async () =>{
    const {data} = await axiosInstance.get('shoes');
    console.log(data);
    return data ;
}

export const useShoes = () =>{
    return useQuery(['shoes'], fetchtShoes);
}