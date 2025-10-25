import About from "./modules/about/components/About";
import Header from "./modules/header/components/Header";

function App() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-screen lg:w-1/2 mx-auto py-1 px-5">
        <Header />
        <About />
      </div>
    </div>
  );
}

export default App;
