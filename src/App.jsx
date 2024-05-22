import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <Navbar/>
      </div>
      <Jumbotron />
      <Cards />
      <div className="container-fluid bg-dark">
        <Footer />
      </div>
    </>
  );
}

export default App;
