import { useState, useEffect } from 'react';

const reviews = [
  { id: 1, name: 'Md Nasir', content: 'Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service. We were delighted with your courteous, prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate.' },
  { id: 2, name: 'Rohit Bhati', content: 'Very fair. Tyre change. Ultimate service by shoppe guys. Owner behavior very cool. Quote as per in budget. Highly recommend.' },
  { id: 3, name: 'Pradeep Kumar', content: 'Best tyre shop in vaishali area. Good dealing with customer. All tyres type available here. Price also reasonable. Overall good experience.' },
  { id: 4, name: 'Pardeep Kumar', content: 'Best shopee in indirapuram. Good customer service. After sale service amazing. Overall nice experience.' },
];

export default function GoogleReviews() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">2278 Google Reviews</h2>
      <div className="overflow-hidden bg-gray-200 rounded-lg p-4 w-50 h-100">
        <div className="transition-transform duration-500 ease-in-out " style={{ transform: `translateX(-${currentReview * 100}%)` }}>
          <div className="flex">
            {reviews.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0 px-4">
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-gray-600">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}