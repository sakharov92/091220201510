import React from "react";
import "./Feedbacks.css";
import FeedbackList from "../FeedbackList/FeedbackList";
import FeedbackNav from "../FeedbackNav/FeedbackNav";
import  InputMessage from "../InputMessage/InputMessage"


const Feedbacks = () => (
    <section className="feedBacks">
        <FeedbackNav/>
        <FeedbackList/>
        <InputMessage/>
    </section>
)
export default Feedbacks;
