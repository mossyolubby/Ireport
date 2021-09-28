import { createContext } from "react"
import React,{createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const NewsContext = createContext();

const NewsContextProvider = (props) => {
    const [data, setData] = useState ([]);
    const apikey = " https://i-report-project.herokuapp.com/api/all/posts ";

    useEffect(()=>{
        axios
        .get (`/categories: = ${apikey}`
        )
        .then((response)=>setData(response.data()))
        .catch((error)=> console.log(error));
    },[]);

    return(
        <NewsContextProvider props= {data}>{props.children}
        </NewsContextProvider>
    )
}