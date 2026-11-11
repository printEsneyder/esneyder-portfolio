import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { TechStack } from './sections/TechStack';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <TechStack />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
