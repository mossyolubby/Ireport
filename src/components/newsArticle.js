import React from 'react'

function NewsArticle({data}) {
    return (
        <div>
           <h1 className="news_title">{data.title}</h1>
           <p className='news_description'>{data.description}</p>
           <span>{data.like}</span>
           <span>{data.comment}</span>
           <span>{data.share}</span> 
        </div>
    )
}

export default NewsArticle;
