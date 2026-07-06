import { useLanguage, useTheme } from '../context';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import './DashboardHeader.css';

const DashboardHeader = ({ title }) => {
  const { t } = useLanguage();

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1 className="page-title">{title}</h1>
      </div>
      <div className="header-right">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default DashboardHeader;
