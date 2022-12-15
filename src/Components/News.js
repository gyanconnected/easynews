import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
export default class News extends Component {
  
  static defaultProps = {
    country : 'in',
    pageSize : 15,
    category : 'general'
  }

  // static propTypes = {
  //   country : this.propTypes.string,
  //   pageSize : this.propTypes.number,
  //   category : this.propTypes.string
  // }

    constructor(props){
      super(props)
      this.state={
        articles : this.articles,
        loading :false,
        page:1,
        totalResults :0
      }
      document.title = `${this.props.category.charAt(0).toUpperCase()
        + this.props.category.slice(1)}` +" - EasyNews "
    }

    async componentDidMount(){
      this.props.setProgress(0);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;

      console.log(url);

      this.setState({loading:true})
      let data = await fetch(url);
      let ParseData = await data.json()
      this.setState({articles : ParseData.articles,
      totalResults :ParseData.totalResults, loading:false})
      this.props.setProgress(100);
    }

    haldlePreviousClick = async () =>{
      this.props.setProgress(0);
      this.setState({
        page : this.state.page-1
      })

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let ParseData = await data.json()
      this.setState({articles : ParseData.articles, loading:false})
      this.props.setProgress(100);
    }

    haldleNextClick = async ()=>{
      this.props.setProgress(0);
    if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
    }
    else{
      
      this.setState({
        page : this.state.page+1
      })

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let ParseData = await data.json()
      this.setState({articles : ParseData.articles, loading:false})
    }
    this.props.setProgress(100);
  }

  render() {

    return (
      <>
      <div className="container my-3">
        <h2 className="text-center" style={{margin: "18px"}}>EasyNews - Top {this.props.category.charAt(0).toUpperCase()
        + this.props.category.slice(1)} Headlines</h2>
        {this.state.loading && <Spinner/>}
      <div className="row">
        {!this.state.loading && this?.state?.articles?.map((element) =>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title:""} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} name={element.source.name}/>
          </div>
        })}
        
      </div>
      </div>
      <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.haldlePreviousClick}>&laquo; Previous</button>
      <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.haldleNextClick}>Next &raquo;</button>
      </div>
      </>
    )
  }
}
