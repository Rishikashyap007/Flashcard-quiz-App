import { useState } from 'react';

function Quiz({ flashcards, updateProgress }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState(0);

  const handleNext = (correct) => {
    if (correct) setScore(score + 1);
    updateProgress(score + (correct ? 1 : 0), flashcards.length);
    setCurrentIndex(currentIndex + 1);
    setFlipped(false);
  };

  if (currentIndex >= flashcards.length) {
    return (
      <div className="p-6 bg-white rounded shadow-md text-center">
        <h2 className="text-2xl mb-4">Quiz Completed!</h2>
        <p className="text-xl">Your score: {score}/{flashcards.length}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 bg-blue-500 text-white text-lg font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded shadow-md text-center transition-all duration-500 ease-in-out">
      <h2 className="text-xl mb-4">Quiz Mode</h2>
      
      {/* Instruction Section */}
      {!flipped && (
        <p className="text-lg text-gray-700 mb-4">
          Click on the card to reveal the answer.
        </p>
      )}
      {flipped && (
        <p className="text-lg text-gray-700 mb-4">
          Did you get the answer correct? Select "Correct" or "Wrong" to proceed.
        </p>
      )}
      
      <div
        onClick={() => setFlipped(!flipped)}
        className={`bg-blue-100 p-6 w-64 h-40 mx-auto flex items-center justify-center text-xl rounded shadow-md cursor-pointer mb-4 transform transition-transform duration-500 ease-in-out ${flipped ? 'rotate-y-180' : ''}`}
      >
        {flipped ? flashcards[currentIndex].answer : flashcards[currentIndex].question}
      </div>
      
      {flipped && (
        <div className="flex justify-between">
          <button
            onClick={() => handleNext(true)}
            className="bg-green-500 text-white p-2 rounded w-1/2 mx-2 hover:bg-green-600"
          >
            Correct
          </button>
          <button
            onClick={() => handleNext(false)}
            className="bg-red-500 text-white p-2 rounded w-1/2 mx-2 hover:bg-red-600"
          >
            Wrong
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
