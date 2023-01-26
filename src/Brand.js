import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Orders from "./Orders";
import { addOrder } from "./store/orders/ordersSlice";

export default function Brand(props) {
  const brandOrders = useSelector((state) => state.orders.data);
  const orderData = brandOrders.find((x) => x.name === props.brandName).orders;
  const dispatch = useDispatch();

  // State for the price value of the order to add
  const [newPrice, setNewPrice] = useState(0);

  /**
   * Handle adding an order to this brand
   */
  function handleAddOrder(e) {
    dispatch(
      addOrder({
        name: props.brandName,
        price: newPrice
      })
    );
    setNewPrice(0);
  }

  return (
    <div>
      <div className="Brand">
        {props.brandName}{" "}
        <Button
          variant="danger"
          onClick={(e) => props.onBrandDelete(props.brandName)}
        >
          Delete
        </Button>{" "}
        <label>
          Price:{" "}
          <input
            type="text"
            value={newPrice}
            onChange={(event) =>
              setNewPrice(Number.parseInt(event.target.value, 10))
            }
          />
        </label>{" "}
        <Button variant="primary" onClick={handleAddOrder}>
          Add Order
        </Button>
      </div>
      <Orders brand={props.brandName} orders={orderData} />
    </div>
  );
}
