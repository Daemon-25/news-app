import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageURL, newsURL} = this.props;
        return (
            <div>
                <div className="card my-3" style={{width: '18rem'}}>
                    <img src={!imageURL?"https://www.reuters.com/resizer/a0kg2jBdv9bLolsMlAToGufG-DQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OBW67CIHSBMCXISBDMDYV4V4WU.jpg":imageURL} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsURL}  target="_blank_" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
