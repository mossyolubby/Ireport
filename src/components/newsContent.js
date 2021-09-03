import { createContext } from "react"
import React,{createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const NewsContext = createContent();

const NewsContextProvider = (props) => {
    const [data, setData] = useState ([]);
    const apikey = " ";

    useEffect(()=>{
        anxios
        .get (`https: = ${apikey}`
        )
        .then((response)=>setData(response.data()))
        .catch((error)=> console.log(error));
    },[]);

    return(
        <NewsContextProvider props= {data}>{props.children}
        </NewsContextProvider>
    )
}