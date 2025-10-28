import About from "./modules/about/components/About";
import Experience from "./modules/experience/components/Experience";
import Header from "./modules/header/components/Header";

function App() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-screen lg:max-w-2xl mx-auto py-1 px-5">
        <Header />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;
