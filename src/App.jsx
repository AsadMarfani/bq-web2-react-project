import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <div className="container mx-auto space-y-6">
        <Profile />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
