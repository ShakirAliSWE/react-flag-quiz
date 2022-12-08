import { useState, useEffect } from "react";

import "./App.css";

import MainContainer from "./components/MainContainer";
import QuestionHeader from "./components/QuestionHeader";
import QuestionBody from "./components/QuestionBody";
import QuestionOptions from "./components/QuestionOptions";
import QuestionResult from "./components/QuestionResult";
import QuestionFeedBack from "./components/QuestionFeedBack";
import quiz from "./data/quiz";
const totalQuiz = quiz.length;

function App() {
  const [quizStart, setQuizStart] = useState(true);
  const [questionNo, setQuestionNo] = useState(0);
  const [questionAttempted, setQuestionAttempted] = useState(false);
  const [questionResult, setQuestionResult] = useState(true);
  const [correctOptions, setCorrectOptions] = useState([]);

  const clickOption = async (i, e) => {
    const optionResult = i === quiz[questionNo].ans;
    setQuestionAttempted(true);
    setQuestionResult(optionResult);
    if (optionResult) {
      setCorrectOptions([...correctOptions, optionResult]);
    }
    setTimeout(() => {
      const nextQuestion = questionNo + 1;
      if (totalQuiz > nextQuestion) {
        setQuestionNo(nextQuestion);
        setQuestionAttempted(false);
        setQuestionResult(false);
      } else {
        setQuizStart(false);
        setQuestionAttempted(false);
        setQuestionResult(false);
      }
    }, 1500);
  };

  const clickTryAgain = () => {
    setQuizStart(true);
    setQuestionNo(0);
    setQuestionAttempted(false);
    setQuestionResult(true);
    setCorrectOptions([]);
  };

  return (
    <MainContainer>
      {quizStart ? (
        <>
          <QuestionHeader
            totalQuestions={totalQuiz}
            currentQuestion={questionNo + 1}
          />
          <QuestionBody
            questionNo={questionNo + 1}
            questionCaption={quiz[questionNo].caption}
            questionImage={quiz[questionNo].image}
          />
          <QuestionOptions
            options={quiz[questionNo].options}
            clickOption={clickOption}
            attempted={questionAttempted}
            optionAns={quiz[questionNo].ans}
          />
          {questionAttempted ? (
            <QuestionResult result={questionResult} />
          ) : null}
        </>
      ) : (
        <QuestionFeedBack
          correctOptions={correctOptions}
          totalQuiz={totalQuiz}
          clickTryAgain={clickTryAgain}
        />
      )}
    </MainContainer>
  );
}

export default App;
