export default function QuestionForm() {
  return (
    <div className="bg-yellow-100 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Have a question about Tyres?</h2>
      <p className="mb-4">Get an answer in 24 hours from our experts.</p>
      <form>
        <input
          type="text"
          placeholder="Type your question here"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
        >
          Ask Question
        </button>
      </form>
    </div>
  );
}