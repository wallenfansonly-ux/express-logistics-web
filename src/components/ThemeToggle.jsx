import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
