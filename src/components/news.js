import React, { useContext} from 'react'
import {NewsContext} from "../NewsContent"
import NewsArticle from "./newsArticle"


function News(props) {
    const {data} = useContext(NewsContext);
    console.log(data);


    return (
        <div>
           <h1>News App</h1>
        <div>
            {data?data.article.map((news)=>(
                <NewsArticle data = {news} key={news.url}/>
            ))
            :"Loading"}
        </div>
        </div>
    )
}

export default News;
