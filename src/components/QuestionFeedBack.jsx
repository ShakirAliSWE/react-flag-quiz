import React from "react";

export default function QuestionFeedBack({
  totalQuiz = 0,
  correctOptions = [],
  clickTryAgain = () => {},
}) {
  console.log("correctOptions", correctOptions);
  return (
    <>
      <div className="alert alert-warning text-center mb-2">
        <h4>Quiz Result</h4>
      </div>
      <div className="bg-body rounded shadow-sm p-4 mb-2">
        <div className="d-flex">
          <h4 className="w-75">Total Questions : </h4>
          <h4>{totalQuiz}</h4>
        </div>
        <div className="d-flex text-success">
          <h4 className="w-75">Total Correct Questions : </h4>
          <h4>{correctOptions.length}</h4>
        </div>

        <div className="d-flex text-danger">
          <h4 className="w-75">Total Incorrect Questions : </h4>
          <h4>{totalQuiz - correctOptions.length}</h4>
        </div>
      </div>
      <div className="w-100 text-center">
        <button className="btn btn-primary w-75" onClick={clickTryAgain}>
          Try again
        </button>
      </div>
    </>
  );
}
