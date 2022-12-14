import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, publishedAt, author, name} = this.props;

    return (
      <>
      <div className="my-3">
      
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"210px", top:"-15px"}}>
    <span className="visually-hidden">{name}</span>
  </span>
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
}
