
import React from 'react';

const NewsItem = (props) => {

  let {description, imageUrl, newsUrl, date} = props;

  return (
    // 009ef5ab69844ba9bb5860f3815e4631
    <div>
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark text-warning" style={{ zIndex: '1', left: '87%' }}>
          {props.source === "" ? "News" : props.source}
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title === "" ? "Unknown" : props.title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-muted'>By {props.author === "" ? "Unknown" : props.author}, published on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' className="btn btn-sm btn-warning">Know more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem;
