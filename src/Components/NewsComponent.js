import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner';


export class NewsComponent extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    articles = []

    capitilize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
        }
        document.title = `${this.capitilize(this.props.category)} - NewsMonkey`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06f0cbcc850444619954ad8ac88a12c2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06f0cbcc850444619954ad8ac88a12c2&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    render() {
        console.log("render");
        const handleNext = async () => {
            if (!Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1) {
                this.setState({
                    page: this.state.page + 1
                });
                this.updateNews();
            }
        }

        const handlePrev = async () => {
            this.setState({
                page: this.state.page - 1
            });
            this.updateNews();
        }
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsMonkey - Top {this.capitilize(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsURL={element.url} date={element.publishedAt} author={element.author} source={element.source.name}></NewsItem>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={handlePrev}>&larr; Previous</button>
                    <button disabled={Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1} type="button" className="btn btn-primary" onClick={handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default NewsComponent
