import React from "react";

const ButtonStyle = (attempted, i, optionAns) => {
  if (attempted) {
    return i === optionAns ? "btn-success disabled" : "btn-danger disabled";
  } else {
    return "btn-light";
  }
};

export default function QuestionOptions({
  options = [],
  clickOption = () => {},
  attempted = false,
  optionAns = 0,
}) {
  return (
    <>
      <div className="options">
        {options.map((option, i) => {
          return (
            <div className="option" key={i}>
              <button
                className={`btn option-btn ${ButtonStyle(
                  attempted,
                  i,
                  optionAns
                )}`}
                onClick={(e) => clickOption(i, e)}
              >
                {option}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
{
  /* <div className="d-flex flex-column mb-2">
        <div className="d-flex mb-2">
          <button
            className="btn btn-success w-50 m-2"
            style={{ textAlign: "left" }}
          >
            A
          </button>
          <button
            className="btn btn-danger w-50 m-2"
            style={{ textAlign: "left" }}
          >
            B
          </button>
        </div>
        <div className="d-flex mb-2">
          <button
            className="btn btn-light w-50 m-2"
            style={{ textAlign: "left" }}
          >
            C
          </button>
          <button
            className="btn btn-light w-50 m-2"
            style={{ textAlign: "left" }}
          >
            D
          </button>
        </div>
      </div> */
}
