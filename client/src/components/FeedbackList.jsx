const FeedbackList = ({ feedbacks }) => {
  return (
    <div className="mt-10 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Feedbacks</h2>
      {feedbacks.length === 0 && <p className="text-gray-400 text-center">No feedback yet.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="border border-gray-200 p-8 rounded-2xl shadow bg-white min-h-[180px] flex flex-col justify-center">
            <p className="font-semibold text-xl text-gray-700 mb-3">{fb.name}</p>
            <div className="text-gray-600 text-lg whitespace-pre-line">{fb.feedback}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;