import { useEffect, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    const res = await fetch('http://localhost:5000/feedbacks');
    const data = await res.json();
    setFeedbacks(Array.isArray(data) ? data : []);
  };

  const handleNewFeedback = async (feedback) => {
    await fetch('http://localhost:5000/feedbacks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });
    fetchFeedbacks();
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 py-10 px-4 flex flex-col items-center">
        <FeedbackForm onSubmit={handleNewFeedback} />
        <FeedbackList feedbacks={feedbacks} />
      </main>
      <Footer />
    </div>
  );
};

export default App;