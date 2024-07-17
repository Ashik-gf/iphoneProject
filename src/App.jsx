import Hero from "./Components/Hero";
import HighLight from "./Components/HighLight";
import Model from "./Components/Model";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <main className=" bg-black text-gray-100 min-h-screen max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <HighLight />
        <Model />
      </main>
    </>
  );
};

export default App;
