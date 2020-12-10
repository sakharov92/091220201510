import React from "react";
import "./FeedbackNav.css";
import  like from "../../assets/like.svg"
import  comment from "../../assets/comment.svg"


const FeedbackNav = () => (
    <div className="feedbackNav">
      <p className="filter">
          Последние отзывы
          <a href="#" >Все отзывы</a>
      </p>
        <div className="socilaBtns">
            <img src={like} alt="like"/>
            <span className="likesAmount">131</span>
            <img src={comment} alt="comment" className="comment"/>
            <span className="commentsAmount">14</span>
        </div>
    </div>
)
export default FeedbackNav;
