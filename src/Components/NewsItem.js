import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageURL, newsURL, date, author, source} = this.props;
        let d = new Date(date)
        return (
            <div>
                <div className="card my-3">
                <div style={{display: 'flex' ,justifyContent:'flex-end', position: 'absolute', right: '0'}}>
                <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                    <img src={!imageURL ? "https://www.reuters.com/resizer/a0kg2jBdv9bLolsMlAToGufG-DQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OBW67CIHSBMCXISBDMDYV4V4WU.jpg" : imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsURL} target="_blank_" className="btn btn-sm btn-primary">Read More</a>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {d.toUTCString()}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
