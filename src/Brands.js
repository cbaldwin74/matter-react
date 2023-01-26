import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Brand from "./Brand";
import { addBrand, deleteBrand } from "./store/brands/brandsSlice";
import { addBrandOrders, deleteBrandOrders } from "./store/orders/ordersSlice";

/**
 * A component that disaplays a list of brands and orders for
 * those brands.
 *
 * @param {*} props
 */
export default function Brands(props) {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands.names);
  // Build the list of Brand components
  const brandNames = brands.map((name) => (
    <li key={name}>
      <>
        <Brand brandName={name} onBrandDelete={handleBrandDelete} />
        <hr />
      </>
    </li>
  ));

  // State for the name of a brand to add
  const [newBrand, setNewBrand] = useState("");

  /**
   * Handle the Add Brand button click
   */
  function handleAddBrand(e) {
    dispatch(addBrandOrders(newBrand));
    dispatch(addBrand(newBrand));
    setNewBrand("");
  }

  /**
   * Handle the delete brand event
   */
  function handleBrandDelete(brandName) {
    dispatch(deleteBrand(brandName));
    dispatch(deleteBrandOrders(brandName));
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
      <Button variant="primary" onClick={handleAddBrand}>
        Add Brand
      </Button>
      <ul>{brandNames}</ul>
    </div>
  );
}
