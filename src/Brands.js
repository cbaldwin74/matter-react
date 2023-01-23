import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Brand from "./Brand";
import { addBrand } from "./store/brands/brandsSlice";
import { addBrandOrders } from "./store/orders/ordersSlice";

export default function Brands(props) {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands.names);
  const brandNames = brands.map((name) => (
    <li key={name}>
      <>
        <Brand brandName={name} />
        <hr />
      </>
    </li>
  ));

  const [newBrand, setNewBrand] = useState("");

  function handleClick(e) {
    dispatch(addBrandOrders(newBrand));
    dispatch(addBrand(newBrand));
    setNewBrand("");
  }

  return (
    <div className="Brands">
      <h2>{props.title || "Brands"}</h2>
      <label>
        Name:{" "}
        <input
          type="text"
          value={newBrand}
          onChange={(event) => setNewBrand(event.target.value)}
        />
      </label>{" "}
      <Button variant="primary" onClick={handleClick}>
        Add Brand
      </Button>
      <ul>{brandNames}</ul>
    </div>
  );
}
