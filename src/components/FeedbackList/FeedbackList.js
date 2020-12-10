import React from "react";
import { connect } from "react-redux";
import "./FeedbackList.css";
import FeedbackItem from "../FeedbackItem/FeedbackItem"


const FeedbackList = ({feedbacksScope}) => {
let list = feedbacksScope.map((e)=>{
  return  <li key={e.name + new Date().getMilliseconds()+e.message}><FeedbackItem name ={e.name} message={e.message} date={e.date}/></li>
})
    return (<ul className="feedbackList">{list}</ul>)
}
export default connect((state) => {
    let propState = Object.assign({}, state);
    return propState;
})(FeedbackList);