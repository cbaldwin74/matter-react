import { useSelector } from "react-redux";
import Brand from "./Brand";

export default function Brands(props) {
  const brands = useSelector((state) => state.brands.names);
  const brandNames = brands.map((name) => (
    <li key={name}>
      <Brand brandName={name} />
    </li>
  ));

  return (
    <div className="Brands">
      <h2>{props.title || "Brands"}</h2>
      <ul>{brandNames}</ul>
    </div>
  );
}
