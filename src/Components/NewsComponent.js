import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {
    articles = []

    constructor() {
        super();
        console.log("Constructor");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=06f0cbcc850444619954ad8ac88a12c2&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    render() {
        console.log("render");
        const handleNext = async () => {
            console.log("next");

            if (Math.ceil(this.state.totalResults / 20) < this.state.page+1) {

            } else {
                let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=06f0cbcc850444619954ad8ac88a12c2&page=${this.state.page + 1}&pageSize=20`;
                let data = await fetch(url);
                let parsedData = await data.json();
                console.log(parsedData);
                this.setState({
                    page: this.state.page + 1,
                    articles: parsedData.articles
                });
            }
        }

        const handlePrev = async () => {
            console.log("Previous");

            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=06f0cbcc850444619954ad8ac88a12c2&page=${this.state.page - 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles
            });
        }
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageURL={element.urlToImage} newsURL={element.url}></NewsItem>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={handlePrev}>&larr; Previous</button>
                    <button type="button" className="btn btn-primary" onClick={handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default NewsComponent
