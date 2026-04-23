import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUsPage';
import AgentPage from './pages/AgentPage';
import ContactUsPage from './pages/ContactUsPage';
import ServicesPage from './pages/ServicesPage';
import BusinessPage from './pages/BusinessPage';
import PublicationsPage from './pages/PublicationsPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/agent" element={<AgentPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
