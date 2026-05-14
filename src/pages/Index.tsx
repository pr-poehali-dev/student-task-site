import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import SubscriptionPage from './SubscriptionPage';
import TasksPage from './TasksPage';
import ProfilePage from './ProfilePage';

type Page = 'home' | 'register' | 'subscription' | 'tasks' | 'profile';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const noNavbarPages: Page[] = ['register'];
  const showNavbar = !noNavbarPages.includes(currentPage);

  return (
    <div className="min-h-screen bg-background">
      {showNavbar && (
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      <div key={currentPage} className="animate-fade-in">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'register' && <RegisterPage onNavigate={handleNavigate} />}
        {currentPage === 'subscription' && <SubscriptionPage onNavigate={handleNavigate} />}
        {currentPage === 'tasks' && <TasksPage onNavigate={handleNavigate} />}
        {currentPage === 'profile' && <ProfilePage onNavigate={handleNavigate} />}
      </div>
    </div>
  );
};

export default Index;
