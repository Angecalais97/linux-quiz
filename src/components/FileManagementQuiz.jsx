import { useState } from 'react';
import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

export default function FileManagementQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      question: "What is the command to create a new file in Linux?",
      options: ["touch", "mkdir", "rm", "cp"],
      correctAnswer: "touch",
      explanation: "The touch command is used to create a new empty file in Linux.",
    },
    // Add more questions here
  ];

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    setShowFeedback(true);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const submitQuiz = () => {
    setFinished(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <Card className="w-full max-w-2xl mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xl text-center">
            Your final score: {score} out of {questions.length}
          </p>
          <div className="text-center">
            <Button onClick={restartQuiz}>Try Again</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">File Management Quiz</CardTitle>
        <p className="text-gray-500">Question {currentQuestion + 1} of {questions.length}</p>
        <p className="text-gray-500">Score: {score}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <h2 className="text-xl font-semibold">{questions[currentQuestion].question}</h2>
        <div className="grid grid-cols-1 gap-3">
          {questions[currentQuestion].options.map((option) => (
            <Button
              key={option}
              onClick={() => handleAnswer(option)}
              variant={
                showFeedback
                  ? option === questions[currentQuestion].correctAnswer
                    ? 'default'
                    : option === selectedAnswer
                    ? 'destructive'
                    : 'outline'
                  : 'outline'
              }
              disabled={showFeedback}
              className="p-4 text-left"
            >
              {option}
            </Button>
          ))}
        </div>

        {showFeedback && (
          <div className="mt-4 p-4 rounded-lg bg-gray-100">
            <p className="font-semibold">
              {selectedAnswer === questions[currentQuestion].correctAnswer
                ? '✅ Correct!'
                : '❌ Incorrect!'}
            </p>
            <p className="mt-2">{questions[currentQuestion].explanation}</p>
            {currentQuestion < questions.length - 1 ? (
              <Button onClick={nextQuestion} className="mt-4">
                Next Question
              </Button>
            ) : (
              <Button onClick={submitQuiz} className="mt-4">
                Submit Quiz
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
