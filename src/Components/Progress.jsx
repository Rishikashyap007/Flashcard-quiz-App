function ProgressTracker({ score, total }) {
    return (
      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-xl">Progress</h2>
        <p>{score} / {total}</p>
      </div>
    );
  }
  
  export default ProgressTracker;
  