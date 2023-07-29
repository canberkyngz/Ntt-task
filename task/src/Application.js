import "./Application.css";
import CardPage from "./components/card";
import Header from "./components/header";
import ImageSlider from "./components/slider";

function App() {
  return (
    <div
      className="container m-auto overflow-hidden"
      style={{ maxWidth: "1440px" }}
    >
      <Header />
      <ImageSlider />
      <CardPage />
      
    </div>
  );
}

export default App;
