import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from '../context/ThemeContext';
import GoogleTranslate from "../Language";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const navLinks = [
  { path: '/notes', label: 'Notes' },
  { path: '/interview-questions', label: 'Interview Questions' },
  { path: '/coding-questions', label: 'Coding Questions' },
  { path: '/aptitude', label: 'Aptitude Quiz' },
  { path: '/resume-templates', label: 'Resume Templates' },
  { path: '/internship', label: 'Internship' },
  { path: '/roadmap', label: 'Roadmap' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);
  const toggleSignup = () => setIsSignup(!isSignup);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Signup successful!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login successful!");
      }
      setIsLoginOpen(false);
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    toast.info("Logged out successfully!");
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg w-full fixed top-0 z-50">
      <div className="max-w-10xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              PlacementPrep
            </Link>
          </div>
          {/* Desktop View */}
          <div className="hidden md:flex items-center space-x-4">
            {user && navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 text-xl dark:text-gray-300 hover:text-blue-600 hover:dark:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={toggleLogin}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Login
              </button>
            )}
          </div>
          {/* Mobile View Header */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <button
                onClick={handleLogout}
                className="block bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={toggleLogin}
                className="block bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button onClick={toggleLogin} className="absolute top-3 right-3 text-gray-600">×</button>
            <h2 className="text-2xl font-bold text-center mb-4">{isSignup ? 'Sign Up' : 'Login'}</h2>
            <form onSubmit={handleAuth}>
              {isSignup && (
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" className="w-full px-3 py-2 border rounded-lg mb-2" />
              )}
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="w-full px-3 py-2 border rounded-lg mb-2" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" className="w-full px-3 py-2 border rounded-lg mb-2" />
              <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg">{isSignup ? 'Sign Up' : 'Login'}</button>
            </form>
            <button onClick={toggleSignup} className="text-red-600 mt-4 block text-center">
              {isSignup ? 'Already have an account? Login' : 'No account? Sign up'}
            </button>
          </div>
        </div>
      )}
      <div className="absolute top-17 right-4 md:static md:ml-4">
        <GoogleTranslate />
      </div>
      <ToastContainer />
    </nav>
  );
}