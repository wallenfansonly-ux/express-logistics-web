import { useState, useRef, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { currentLanguage, languages, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find(l => l.code === currentLanguage);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button className="language-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaGlobe />
        <span className="language-current">{currentLang?.nativeName}</span>
      </button>
      {isOpen && (
        <ul className="language-dropdown">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
                onClick={() => handleSelect(lang.code)}
              >
                <span className="lang-native">{lang.nativeName}</span>
                <span className="lang-name">{lang.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
