import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Brands from "./Brands";

export default function App() {
  return (
    <div className="App">
      <h1>Brand Orders</h1>
      <Brands title="Our Brands" />
    </div>
  );
}
