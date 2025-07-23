import { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !feedback) return;  //form validation

    onSubmit({ name, feedback });
    setName('');
    setFeedback('');
  };

  return (
    <div className="max-w-xl w-full mx-auto mb-10">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Share Your Feedback</h2>
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:border-blue-400 focus:outline-none text-gray-800 bg-gray-50"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
            <textarea
              id="feedback"
              className="w-full border border-gray-300 px-3 py-2 rounded min-h-28 resize-none focus:border-blue-400 focus:outline-none text-gray-800 bg-gray-50"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
