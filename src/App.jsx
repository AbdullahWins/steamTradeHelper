import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <section className="flex flex-col items-center justify-between min-h-screen w-full">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </section>
  );
}

export default App;
