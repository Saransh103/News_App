import React, { Component } from "react";
import Logo from "../images/Logo.png";


export default class Slidingwindow extends Component {
 

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
        },
        
          {
            "source": { "id": "espn", "name": "ESPN" },
            "author": "Paul Gutierrez",
            "title": "Aidan O'Connell's two TD passes start Raiders onslaught - ESPN",
            "description": "O'Connell threw first-quarter TD passes to Tre Tucker and Jakobi Meyers to start the rout, as the Raiders have already set their season high for points.",
            "url": "https://www.espn.com/nfl/story/_/id/39115975/aidan-oconnell-touchdown-passes-raiders-tre-tucker-jakobi-meyers",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1215%2Fr1266551_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-15T03:29:00Z",
            "content": "LAS VEGAS -- Break up the Las Vegas Raiders' offense.\r\nFour days after getting shut out in a 3-0 defeat to the Minnesota Vikings, the Raiders scored a trio of first-quarter touchdowns to take a 21-0 … [+3177 chars]"
          },
          {
            "source": { "id": "associated-press", "name": "Associated Press" },
            "author": "RAF CASERT, SAMUEL PETREQUIN",
            "title": "EU leaders fail to agree on a $55 billion aid package for Ukraine - The Associated Press",
            "description": "The European Union has failed to agree on a $54 billion package in financial aid that Ukraine desperately needs to stay afloat, even as the bloc decided to open accession negotiations with the war-torn country. The aid was vetoed Thursday by Hungarian Prime M…",
            "url": "https://apnews.com/article/eu-ukraine-hungary-russsia-war-aid-6a3a5828483121f19193f76b373ca692",
            "urlToImage": "https://dims.apnews.com/dims4/default/723b91b/2147483647/strip/true/crop/8146x4582+0+424/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0a%2F30%2Fc2815a806220357412fa8a5d3084%2Fe38357f945d7438c9257a202eaf10988",
            "publishedAt": "2023-12-15T03:00:00Z",
            "content": "BRUSSELS (AP) The European Union failed to agree Thursday on a 50 billion-euro ($54 billion) package in financial aid that Ukraine desperately needs to stay afloat, even as the bloc decided to open a… [+5891 chars]"
          },

    ]
    constructor() {
        super();
        this.state = {
        articles: this.articles,
        country:'in',
        category:'business'

        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a04d4e4176454c55a3f1ec487e3963e4&page=1&pageSize=${this.props.pageSize}`
      
        let data = await fetch(url)
        let pardedData = await data.json()
       
        this.setState({
            articles: pardedData.articles
        })


    }
   

    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {this.state.articles.map((article, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner" style={{ height: '450px' }} data-bs-interval="2000">
                    {this.state.articles.map((article, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} style={{ height: '450px' }} data-bs-interval="2000">
                            <img src={article ? article.urlToImage : 'placeholder-image-url'}  alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{article ? article.title : 'Article Title'}</h5>
                                <p>{article ? article.description : 'Article Description'}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}
