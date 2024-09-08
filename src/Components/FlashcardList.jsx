import Flashcard from './Flashcard';

function FlashcardList({ flashcards }) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-black mb-4">Your Flashcards</h2>
      <p className="text-lg text-gray-700 mb-4">
        Here are your created flashcards. Click on any flashcard to view its details and review the question and answer.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2 md:p-4 mx-auto">
        {flashcards.map((flashcard, index) => (
          <Flashcard
            key={index}
            flashcard={flashcard}
            className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        ))}
      </div>
    </div>
  );
}

export default FlashcardList;
