import React, { useState } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaCross } from 'react-icons/fa';

const Review = () => {
  // console.log(reviews);
  const [reviewNum, setReviewNum] = useState(0);
  const { id, name, job, image, text } = reviews[reviewNum];
  const reviewLen = reviews.length;
  // console.log(reviews.length);

  const relateNumber = (index) => {
    if (index > reviewLen - 1) {
      return 0;
    }
    if (index < 0) {
      return reviewLen - 1;
    }

    return index;
  };

  const nextReview = () => {
    setReviewNum((reviewNum) => {
      let newNum = reviewNum + 1;
      return relateNumber(newNum);
    });
  };

  const previousReview = () => {
    setReviewNum((reviewNum) => {
      let newNum = reviewNum - 1;
      return relateNumber(newNum);
    });
  };

  const randomChapter = () => {
    let index = Math.floor(Math.random() * reviewLen);
    if (index === reviewNum) {
      index = reviewNum + 1;
    }
    setReviewNum(relateNumber(index));
  };

  return (
    <article className='review' key={id}>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaCross />
        </span>
      </div>

      <h2 className='author'>{name}</h2>
      <h2 className='job'>{job}</h2>
      <h3 className='info'>{text}</h3>
      <div className='button-container'>
        <button
          onClick={() => previousReview()}
          className='prev-btn prev-btn:hover'
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => nextReview()}
          className='next-btn next-btn:hover'
        >
          <FaChevronRight />
        </button>
      </div>

      <button
        className='random-btn random-btn:hover'
        onClick={() => randomChapter()}
      >
        RANDOM CHAPTER
      </button>
    </article>
  );
};

export default Review;
