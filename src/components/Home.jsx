export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Linux Quiz App</h1>
      <p className="text-lg mb-6">
        Welcome to the Linux Quiz App! Test your knowledge of Linux commands and file management.
      </p>
      <a
        href="/quiz"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Start Quiz
      </a>
    </div>
  );
}
