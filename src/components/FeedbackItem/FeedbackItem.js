import React from "react";
import "./FeedbackItem.css";

export const FeedbackItem = ({name, date, message}) =>(
    <div className="feedback">
        <p className="info">{name}
            <span>{date}</span>
        </p>
        <div className="feedbackMessage">
            <p>{message}</p>
        </div>
    </div>
)
export default FeedbackItem



