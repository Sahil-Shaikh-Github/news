
import { useState } from 'react';
import React, { useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const NewsComponent = (props, country = "in", category="general") => {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState();
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [limit, setLimit] = useState(0);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase()+str.slice(1);
  }

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     articles : [],
  //     loading : false,
  //     page : 1,
  //     totalArticles : 0, 
  //   }

    // document.title = `NewsDaily - ${this.capitalize(props.category)}`;

  

  const updateNews = async() => {

    // this.setState({
    //   loading: true
    // })
    setLoading(true);
    props.updateProgress(10);
    // console.log(props.apiKey);
    
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=009ef5ab69844ba9bb5860f3815e4631&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    props.updateProgress(30);
    let parsedData = await data.json();
    props.updateProgress(70);
    
    setLoading(false);
    setArticles(parsedData.articles);
    setTotalArticles(parsedData.totalResults);
    setLimit(Math.ceil(totalArticles/props.pageSize));
    
    // this.setState({
    //   loading: false,
    //   articles : parsedData.articles,
    //   totalArticles : parsedData.totalResults,
    //   limit : Math.ceil(this.state.totalArticles/props.pageSize)
    // })

    props.updateProgress(100);
  }

  useEffect(()=>{
    updateNews();
  },[]);
  
  // async componentDidMount(){
  //   this.updateNews();
  // }
  
  const fetchMoreData = async() =>{
    
    setLoading(true);
    // this.setState({
    //   page : this.state.page+1,
    //   loading : true
    // })
    
    let fetchURL = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=009ef5ab69844ba9bb5860f3815e4631&page=${page+1}&pageSize=${props.pageSize}`;

    setPage(page+1);

    let dataFetchMoreData = await fetch(fetchURL);
    let fetchedParsedData = await dataFetchMoreData.json();

    setLoading(false)
    setArticles(articles.concat(fetchedParsedData.articles));
    setTotalArticles(totalArticles+fetchedParsedData.totalResults);
    setLimit(Math.ceil(totalArticles/props.pageSize));

    // this.setState({
    //   loading: false,
    //   articles : this.state.articles.concat(fetchedParsedData.articles),
    //   totalArticles : fetchedParsedData.totalResults,
    //   limit : Math.ceil(this.state.totalArticles/props.pageSize)
    // })

  }

  
    return (
      <>
      {/* {this.state.articles.forEach(element => console.log(element))} */}
        <h3 className='text-center my-3'>NewsDaily - Top {capitalize(props.category)} Headlines</h3>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalArticles} 
          loader={loading && <Spinner/>}
        >
          <div className='container'>
            <div className='row '>
            {/* !this.state.loading &&  */}
            {articles.map((element, index) => {
              return <div className='col-md-3 my-4' key={`${element.url}-${index}`}>
                <NewsItem title={element.title === ""? "Unknown" : element.title} imageUrl={element.urlToImage} description={element.description} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}     
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className='d-flex justify-content-between my-4'>
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePreviousButton} className="btn btn-dark  justify-content-start">&larr; Previous</button>  
          <button disabled={this.state.page >= this.state.limit} type="button" onClick={this.handleNextButton} className="btn btn-dark  justify-content-end">Next &rarr;</button>
        </div> */}
      </>
    )
}

// NewsComponent.defaultProps = {
//   country: 'in',
//   pageSize: 11,
//   category: 'general' 
// }

NewsComponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,  
  category: PropTypes.string,  
}

export default NewsComponent;

