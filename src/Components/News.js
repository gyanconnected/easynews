import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React, { Component, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
// export default class News extends Component {
  const News = (props) =>{
  
  // static defaultProps = {
  //   country : 'in',
  //   pageSize : 15,
  //   category : 'general'
  // }

  // static propTypes = {
  //   country : this.propTypes.string,
  //   pageSize : this.propTypes.number,
  //   category : this.propTypes.string
  // }

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

    // constructor(props){
    //   super(props)
    //   this.state={
    //     articles : this.articles,
    //     loading :false,
    //     page:1,
    //     totalResults :0
    //   }
    //   document.title = `${props.category.charAt(0).toUpperCase()
    //     + props.category.slice(1)}` +" - EasyNews "
    // }

    // async componentDidMount(){

    useEffect(()=>{

      updateNews();
      
  },[])

  const updateNews = async()=>{
    props.setProgress(0);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;

      // this.setState({loading:true})

      setLoading(true)

      let data = await fetch(url);
      let ParseData = await data.json()

      // this.setState({articles : ParseData.articles,
      // totalResults :ParseData.totalResults, loading:false})

      setArticles(ParseData.articles)
      setTotalResults(ParseData.totalResults)
      setLoading(false)
      setPage(1)

      props.setProgress(100);
    // }
  }

    const haldlePreviousClick = async () =>{
      props.setProgress(0);
      // this.setState({
      //   page : this.state.page-1
      // })

      setPage(page-1)

      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      // this.setState({loading:true})

      setLoading(true)

      let data = await fetch(url);
      let ParseData = await data.json()
      // this.setState({articles : ParseData.articles, loading:false})

      setArticles(ParseData.articles)
      setLoading(false)
      props.setProgress(100);
    }

    const haldleNextClick = async ()=>{
      props.setProgress(0);
    // if(this.state.page +1 > Math.ceil(this.state.totalResults/props.pageSize)){
      if(page +1 > Math.ceil(totalResults/props.pageSize)){
    }
    else{
      
      // this.setState({
      //   page : this.state.page+1
      // })

      
      console.log(page+1)
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
      // this.setState({loading:true})
      console.log(url)

      setPage(page+1)
      setLoading(true)
      let data = await fetch(url);
      let ParseData = await data.json()

      // this.setState({articles : ParseData.articles, loading:false})

      setArticles(ParseData.articles)
      setLoading(false)
    }
    props.setProgress(100);
  }

  // render() {

    return (
      <>
      <div className="container my-3">
        <h2 className="text-center" style={{margin: "18px"}}>EasyNews - Top {props.category.charAt(0).toUpperCase()
        + props.category.slice(1)} Headlines</h2>
        {loading && <Spinner/>}
      <div className="row">
        {/* {!loading && this?.state?.articles?.map((element) =>{ */}
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
