import About from "./modules/about/components/About";
import Contact from "./modules/contact/components/Contact";
import Experience from "./modules/experience/components/Experience";
import Header from "./modules/header/components/Header";
import Projects from "./modules/projects/components/Projects";

function App() {
  return (
    <div className="w-screen lg:max-w-2xl min-h-screen mx-auto py-10 px-5">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
