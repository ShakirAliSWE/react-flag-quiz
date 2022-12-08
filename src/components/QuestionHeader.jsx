import React from "react";

export default function QuestionHeader(props) {
  const {
    title = "Flag Quiz",
    totalQuestions = 0,
    currentQuestion = 0,
  } = props;
  return (
    <div className="alert alert-warning text-center">
      <h5>{title}</h5>
      <h6>
        Question No : <b>{currentQuestion}</b>/{totalQuestions}
      </h6>
    </div>
  );
}
