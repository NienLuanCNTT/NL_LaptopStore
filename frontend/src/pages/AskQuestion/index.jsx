import React from 'react';
import askquest from 'assets/images/askquestion.png';
import './askquestion.scss'

const AskQuestion = () => {

    return (
        <div className="ask-question">
            <h1>CÂU HỎI THƯỜNG GẶP</h1>
            <img src={askquest} alt="" />
            <div className="content">

            </div>
        </div>
    );
};

export default AskQuestion;