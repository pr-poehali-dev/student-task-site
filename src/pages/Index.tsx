import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import SubscriptionPage from './SubscriptionPage';
import TasksPage from './TasksPage';
import ProfilePage from './ProfilePage';

type Page = 'home' | 'register' | 'login' | 'subscription' | 'pricing' | 'tasks' | 'profile';



const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    // Anchor links on home page
    if (page === 'features' || page === 'faq') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          document.getElementById(page)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(page)?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (page === 'pricing') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const noNavbarPages: Page[] = ['register', 'login'];
  const showNavbar = !noNavbarPages.includes(currentPage);

  const activePage = currentPage === 'pricing' ? 'subscription' : currentPage;

  return (
    <div className="min-h-screen bg-background">
      {showNavbar && (
        <Navbar currentPage={activePage} onNavigate={handleNavigate} />
      )}

      <div key={currentPage} className="animate-fade-in">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {(currentPage === 'register' || currentPage === 'login') && (
          <RegisterPage onNavigate={handleNavigate} />
        )}
        {(currentPage === 'subscription' || currentPage === 'pricing') && (
          <SubscriptionPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'tasks' && <TasksPage onNavigate={handleNavigate} />}
        {currentPage === 'profile' && <ProfilePage onNavigate={handleNavigate} />}
      </div>
    </div>
  );
};

export default Index;