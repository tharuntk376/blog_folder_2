import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Gallery />
      <Card />
      <Footer />
      {/* <Form/> */}
    </>
  );
}

export default App;
