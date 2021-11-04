import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class NewsComponent extends Component {
    articles = []

    constructor() {
        super();
        console.log("Constructor");
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=06f0cbcc850444619954ad8ac88a12c2&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    render() {
        console.log("render");
        const handleNext = async () => {
            console.log("next");

            if (!Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page+1) {
                
                let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=06f0cbcc850444619954ad8ac88a12c2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
                this.setState({loading: true});
                let data = await fetch(url);
                let parsedData = await data.json();
                console.log(parsedData);
                this.setState({
                    page: this.state.page + 1,
                    articles: parsedData.articles,
                    loading: false
                });
            }
        }

        const handlePrev = async () => {
            console.log("Previous");

            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=06f0cbcc850444619954ad8ac88a12c2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false
            });
        }
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsMonkey - Top Headlines</h1>
                {this.state.loading&&<Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsURL={element.url}></NewsItem>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={handlePrev}>&larr; Previous</button>
                    <button disabled={Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page+1} type="button" className="btn btn-primary" onClick={handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default NewsComponent
