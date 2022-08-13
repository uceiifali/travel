import "./App.scss";
import Book from "./Components/BookATrip/Book";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";
import Sub from "./Components/subscripe/Sub";
import Testimonials from "./Components/Testimonials/Testimonials";
import TopSelling from "./Components/TopSelling/TopSelling";
import bg from "./images/heroContent.png";

function App() {
  return (
    <div className="App">
      <img src={bg} className="bg" alt="" />
      <Navbar />
      <Hero />
      <Service />
      <TopSelling />
      <Book />
      <Testimonials />
      <Sub />
      <Footer />
    </div>
  );
}

export default App;
