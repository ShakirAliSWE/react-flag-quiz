import React from "react";

export default function MainContainer({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100 min-vw-100">
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <div className="shadow-sm p-3 mb-5 bg-dark rounded w-50">
          {children}
        </div>
      </div>
    </div>
  );
}
