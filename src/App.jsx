import { useState, useEffect } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css";

const quizQuestions = [
  {
    question: "What is the purpose of useState in React?",
    options: [
      "To manage state in functional components",
      "To perform side effects",
      "To fetch data from an API",
      "To create a new component",
    ],
    answer: "To manage state in functional components",
  },
  {
    question: "Which hook is used to perform side effects in functional components?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: "useEffect",
  },
  // Add more questions as needed
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(
    localStorage.getItem("currentQuestion")
      ? JSON.parse(localStorage.getItem("currentQuestion"))
      : 0
  );
  const [selectedAnswers, setSelectedAnswers] = useState(
    localStorage.getItem("selectedAnswers")
      ? JSON.parse(localStorage.getItem("selectedAnswers"))
      : {}
  );
  const [isSubmitted, setIsSubmitted] = useState(
    localStorage.getItem("isSubmitted") ? JSON.parse(localStorage.getItem("isSubmitted")) : false
  );

  // Save state to localStorage on state change
  useEffect(() => {
    localStorage.setItem("currentQuestion", JSON.stringify(currentQuestion));
    localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    localStorage.setItem("isSubmitted", JSON.stringify(isSubmitted));
  }, [currentQuestion, selectedAnswers, isSubmitted]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: answer });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">React Quiz</h1>
      {!isSubmitted ? (
        <div>
          <Question
            question={quizQuestions[currentQuestion]}
            currentQuestion={currentQuestion}
            totalQuestions={quizQuestions.length}
            selectedAnswer={selectedAnswers[currentQuestion]}
            onAnswerSelect={handleAnswerSelect}
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Previous
            </button>
            {currentQuestion < quizQuestions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <Result quizQuestions={quizQuestions} selectedAnswers={selectedAnswers} />
      )}
    </div>
  );
};

export default App;
