// Code MovieReviews Here
import React from 'react';

function MovieReviews({ reviews }) {
  return (<div className="review-list">
    {reviews.map((el)=>{
    return (<div
      key={el.headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={el.link.url}
        >
          {el.headline}
        </a>
        <br/>
        <span className="author">{el.byline}</span>
      </header>
      <blockquote>{el.summary_short}</blockquote>
    </div>)
  })}</div>);
} 

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
