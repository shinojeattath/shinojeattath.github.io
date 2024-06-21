import './App.css';
import HomePage from './components/homepage';
import AboutPage from './components/about';
import ProjectsPage from './components/project';
import ContactPage from './components/contact';
import ContactSection from './components/contact';
import ContactForm from './components/contact';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ProjectsPage />
      <AboutPage />
      <ContactForm />
    </div>
  );
}

export default App;
