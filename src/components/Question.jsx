/* eslint-disable react/prop-types */

const Question = ({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <div className="question-container p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>
      <p className="mb-4">{question.question}</p>
      <div className="options space-y-2">
        {question.options.map((option, index) => (
          <label key={index} className="block">
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswerSelect(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
