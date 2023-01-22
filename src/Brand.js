import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Orders from "./Orders";
import { deleteBrand } from "./features/brands/brandsSlice";
import { deleteBrandOrders } from "./features/orders/ordersSlice";

export default function Brand(props) {
  const brandOrders = useSelector((state) => state.orders.data);
  const orderData = brandOrders.find((x) => x.name === props.brandName).orders;
  const dispatch = useDispatch();

  function handleBrandDelete() {
    dispatch(deleteBrand(props.brandName));
    dispatch(deleteBrandOrders(props.brandName));
  }

  return (
    <div>
      <div className="Brand">
        {props.brandName}{" "}
        <Button variant="danger" onClick={handleBrandDelete}>
          Delete
        </Button>{" "}
        <Button variant="primary">Add Order</Button>
      </div>
      <Orders orders={orderData} />
    </div>
  );
}
