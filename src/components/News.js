import React, { Component } from 'react'
import Newsitem from './Newsitem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
export default class News extends Component {
  currentPage = 1
  totalResults = 1
  articles = [
    {
      "source": { "id": "fox-sports", "name": "Fox Sports" },
      "author": null,
      "title": "Chargers vs. Raiders highlights: Las Vegas gets overwhelming 63-21 win - FOX Sports",
      "description": "Week 15 of the NFL season starts with the Chargers battling the Raiders on Thursday Night Football. Here are the top moments!",
      "url": "https://www.foxsports.com/stories/nfl/chargers-vs-raiders-live-updates-top-moments-from-thursday-night-football",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/12/1408/814/12.11.23_NFL-Top-Plays_TNF_16x9.jpg?ve=1&tl=1",
      "publishedAt": "2023-12-15T04:35:58Z",
      "content": "Week 15 of the NFL\r\n season began with the Las Vegas Raiders (6-8) dismantling the Los Angeles Chargers (5-9) at Allegiant Stadium on Thursday Night Football, and we've got you covered with all the h… [+4642 chars]"
    }

  ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      currentPage: 1,
      pageSize: 5,
      country: 'in',
      category: 'business',
      totalResults: this.totalResults
    }
  }



  handlePageClick = async (page) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a04d4e4176454c55a3f1ec487e3963e4&page=${page}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let pardedData = await data.json()
    this.setState({
      currentPage: page,
      articles: pardedData.articles,
      loading: false,
      totalResults: pardedData.totalResults
    })

  };

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a04d4e4176454c55a3f1ec487e3963e4&page=${this.state.currentPage - 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let pardedData = await data.json()
    this.setState({
      currentPage: this.currentPage - 1,
      articles: pardedData.articles,
      loading: false,
      totalResults: pardedData.totalResults
    })

  };

  handleNextClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a04d4e4176454c55a3f1ec487e3963e4&page=${this.state.currentPage + 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let pardedData = await data.json()
    this.setState({
      currentPage: this.currentPage + 1,
      articles: pardedData.articles,
      loading: false,
      totalResults: pardedData.totalResults
    })


  };

  async updateNews() {
    this.props.updateProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a04d4e4176454c55a3f1ec487e3963e4&page=${this.state.currentPage}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let pardedData = await data.json()
    this.setState({
      articles: pardedData.articles,
      loading: false,
      totalResults: pardedData.totalResults
    })
    this.props.updateProgress(100)

  }

  fetchMoreData = async () => {

    this.setState({currentPage: this.state.currentPage + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a04d4e4176454c55a3f1ec487e3963e4&page=${this.state.currentPage}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let pardedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(pardedData.articles),
      loading: false,
      totalResults: pardedData.totalResults
    })
  }

  async componentDidMount() {
    this.updateNews();

  }

  render() {
    return (
      <div style={{ marginLeft: '250px', marginRight: '250px' }}>
        <h2 className="text-center">Top {this.props.category} News</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          //loader={<Loader/>}
          loader={this.state.currentPage<Math.ceil(this.state.totalResults/this.props.pageSize)?<Loader/>:<h1 className='text-center'>-------</h1>}
        >
          
              <div className="row " style={{ marginLeft: '1px', marginRight: '1px' }}>
                {this.state.articles.map((element) => (
                  <div className="col my-3" key={element.url}>
                    <Newsitem title={element.title} description={element.description} image={element.urlToImage} newsURL={element.url} />
                  </div>
                ))}
              </div>
            
        </InfiniteScroll>
        

      </div>
    )
  }
}



