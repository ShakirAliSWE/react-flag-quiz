import React from "react";

export default function QuestionResult({ result }) {
  return (
    <div
      className={`alert ${result ? "alert-success" : "alert-danger"}`}
      role="alert"
    >
      {result
        ? "Hurrah!, Your selected option is correct"
        : "Ops!, Your selected option is incorrect"}
    </div>
  );
}
