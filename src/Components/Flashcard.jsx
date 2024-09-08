import { useState } from 'react';

function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="bg-blue-100 p-6 w-64 h-40 flex items-center justify-center text-xl rounded shadow-md cursor-pointer"
    >
      {flipped ? flashcard.answer : flashcard.question}
    </div>
  );
}

export default Flashcard;
