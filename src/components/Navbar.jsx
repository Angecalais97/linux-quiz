import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Linux Quiz
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-500">
              About
            </Link>
            <Link to="/quiz" className="text-gray-800 hover:text-blue-500">
              Quiz
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
