import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Orders from "./Orders";
import { deleteBrand } from "./store/brands/brandsSlice";
import { addOrder, deleteBrandOrders } from "./store/orders/ordersSlice";

export default function Brand(props) {
  const brandOrders = useSelector((state) => state.orders.data);
  const orderData = brandOrders.find((x) => x.name === props.brandName).orders;
  const dispatch = useDispatch();

  function handleBrandDelete() {
    dispatch(deleteBrand(props.brandName));
    dispatch(deleteBrandOrders(props.brandName));
  }

  const [newPrice, setNewPrice] = useState(0);

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
        <Button variant="danger" onClick={handleBrandDelete}>
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
