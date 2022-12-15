import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
  const News = (props) =>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

    useEffect(()=>{

      updateNews();
        document.title = `${props.category.charAt(0).toUpperCase()
        + props.category.slice(1)}` +" - EasyNews "
  },[])

  const updateNews = async()=>{
    props.setProgress(0);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;


      setLoading(true)

      let data = await fetch(url);
      let ParseData = await data.json()
      setArticles(ParseData.articles)
      setTotalResults(ParseData.totalResults)
      setLoading(false)
      setPage(1)
      props.setProgress(100);
  }

    const haldlePreviousClick = async () =>{
      props.setProgress(0);
      setPage(page-1)
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      let ParseData = await data.json()
      setArticles(ParseData.articles)
      setLoading(false)
      props.setProgress(100);
    }

    const haldleNextClick = async ()=>{
      props.setProgress(0);
      if(page +1 > Math.ceil(totalResults/props.pageSize)){
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
      setPage(page+1)
      setLoading(true)
      let data = await fetch(url);
      let ParseData = await data.json()
      setArticles(ParseData.articles)
      setLoading(false)
    }
    props.setProgress(100);
  }
    return (
      <>
      <div className="container my-3">
        <h2 className="text-center" style={{marginTop: "70px"}}>EasyNews - Top {props.category.charAt(0).toUpperCase()
        + props.category.slice(1)} Headlines</h2>
        {loading && <Spinner/>}
      <div className="row">
        {!loading && articles?.map((element) =>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title:""} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} name={element.source.name}/>
          </div>
        })}
        
      </div>
      </div>
      <div className='container d-flex justify-content-between'>
      <button disabled={page==1||page==0} type="button" className="btn btn-dark" onClick={haldlePreviousClick}>&laquo; Previous</button>
      <button disabled={page +1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={haldleNextClick}>Next &raquo;</button>
      </div>
      </>
    )
  }
// }
export default News;

News.defaultProps = {
    country : 'in',
    pageSize : 15,
    category : 'general'
  }

  // News.propTypes = {
  //   country : propTypes.string,
  //   pageSize : propTypes.number,
  //   category : propTypes.string
  // }
