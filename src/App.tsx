import { AuthProvider } from './context/AuthContext';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeShowcase from './components/CodeShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Hero />
        <Features />
        <CodeShowcase />
        <CTA />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
