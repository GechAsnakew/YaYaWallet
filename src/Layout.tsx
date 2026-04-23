import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import FloatingChatBot from './sections/FloatingChatBot';

const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
    <FloatingChatBot />
    </>
  );
};

export default Layout;
