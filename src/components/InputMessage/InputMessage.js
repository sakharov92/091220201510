import React, { useState }  from "react";
import "./InputMessage.css";
import { connect } from "react-redux";
import {ADD_FEEDBACK} from "../../Store/actions/actions";

export const InputMessage = (props) =>{
    const dateFormatter = new Intl.DateTimeFormat("ru", {
        month: "long",
        day: "numeric",
        year: 'numeric'
    });
    function formatDate(string) {
        return new Date(string.slice(6, 10), string.slice(3, 5) - 1, string.slice(0, 2));
    }
    const [getMessage, setMessage] = useState("");
    const inputHandler = ({target:{value}}) =>{
        setMessage(value);
    }
    const send = () => {
    if(getMessage){
        let date = new Date();
        date = dateFormatter.format(date).slice(0, -3);
        props.ADD_FEEDBACK(getMessage, date)
        setMessage("")
    }
    }
    const keySend = (e) => {
    if (e.keyCode === 13 && e.ctrlKey) {
            send();
        }
    }

    return(
        <div className="inputBlock">
            <textarea className="textarea" onKeyDown={keySend} onChange={inputHandler} value={getMessage}/>
            <button className="sendBtn" onClick={send}>Написать консультанту</button>
        </div>
    )
}
export default connect((state) => ({ state: state.feedbacksScope }), {ADD_FEEDBACK
})(InputMessage);


