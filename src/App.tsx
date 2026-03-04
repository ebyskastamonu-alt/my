import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeShowcase from './components/CodeShowcase';
import CTA from './components/CTA';
import Versions from './components/Versions';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <Hero />
          <Features />
          <CodeShowcase />
          <CTA />
          <Versions />
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
