// import React, { Component } from 'react'
import React from 'react'

// export default class NewsItem extends Component {
//   render() {
  const NewsItem = (props)=>{
    let {title, description, imageUrl, newsUrl, publishedAt, author, name} = props//this.props;

    return (
      <>
      <div className="my-3">
      
        <div className="card" style={{width: "18rem"}}>
        <div>
        <span className="badge rounded-pill bg-danger" style={{display:"flex",justifyContent:"flex-end", position:"absolute",right:"0"}}>{name}</span>
  </div>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        
        <div className="card-body">
          
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-danger'>By {!author ? "Unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
          <a rel="true" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
      </div>
      
      </>
    )
  }
// }
export default NewsItem;
