import React from "react";

export default function QuestionBody(props) {
  const { questionNo = 0, questionCaption = "", questionImage = "" } = props;
  return (
    <div className="text-light">
      <h6 className="mb-3">
        Q#{questionNo}. {questionCaption}
      </h6>
      {questionImage ? (
        <img
          src={questionImage}
          className="rounded mx-auto d-block mb-2"
          style={{ width: "50%" }}
        />
      ) : null}
    </div>
  );
}
