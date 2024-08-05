/* eslint-disable react/prop-types */

const Result = ({ quizQuestions, selectedAnswers }) => {
  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();

  return (
    <div className="result-container p-4 border rounded shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">
        Your Score: {score} / {quizQuestions.length}
      </h2>
      <div className="review-answers space-y-4">
        {quizQuestions.map((question, index) => (
          <div key={index} className="review-question p-4 border rounded shadow-md">
            <p className="font-bold">{question.question}</p>
            <p>
              Your Answer: {selectedAnswers[index]} -{" "}
              {selectedAnswers[index] === question.answer ? "Correct" : "Incorrect"}
            </p>
            {selectedAnswers[index] !== question.answer && <p>Correct Answer: {question.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
