import { useState } from 'react';

import FlashcardForm from './Components/FlashcardForm';
import FlashcardList from './Components/FlashcardList';
import Quiz from './Components/Quiz';
import ProgressTracker from './Components/Progress';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const addFlashcard = (flashcard) => {
    setFlashcards([...flashcards, flashcard]);
  };

  const updateProgress = (newScore, newTotal) => {
    setScore(newScore);
    setTotal(newTotal);
  };

  const startQuiz = () => {
    setIsQuizStarted(true);
    setScore(0);
    setTotal(flashcards.length);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Flashcard Quiz App</h1>

        {!isQuizStarted && (
          <>
            <FlashcardForm addFlashcard={addFlashcard} />
            {flashcards.length > 0 && (
              <>
                <FlashcardList flashcards={flashcards} />
                <button
                  onClick={startQuiz}
                  className="mt-6 bg-green-500 text-white text-lg font-semibold py-2 px-4 rounded hover:bg-green-600 w-full"
                >
                  Start Quiz
                </button>
              </>
            )}
          </>
        )}

        {isQuizStarted && (
          <>
            <Quiz flashcards={flashcards} updateProgress={updateProgress} />
            <ProgressTracker score={score} total={total} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
