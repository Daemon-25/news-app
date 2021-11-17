import React from 'react'

const NewsItem = (props)=>{
        let { title, description, imageURL, newsURL, date, author, source} = props;
        let d = new Date(date)
        return (
            <div>
                <div className="card my-3">
                <div style={{display: 'flex' ,justifyContent:'flex-end', position: 'absolute', right: '0'}}>
                <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                    <img src={!imageURL ? "src/Components/No-image-found.jpg" : imageURL} className="card-img-top" alt="..." />
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


export default NewsItem
