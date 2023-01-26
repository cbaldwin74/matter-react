import { deleteOrder } from "./store/orders/ordersSlice";
import { useDispatch } from "react-redux";
import Order from "./Order";

/**
 * A component tfor a list of orders.
 *
 * @param {*} props
 */
export default function Orders(props) {
  const dispatch = useDispatch();
  const orders = props.orders.map((x, index) => {
    let order = {
      ...x,
      index
    };

    function handleDelete(brand, index) {
      dispatch(
        deleteOrder({
          index: index,
          name: brand
        })
      );
    }

    return (
      <li key={index}>
        <Order brand={props.brand} order={order} onDelete={handleDelete} />
      </li>
    );
  });

  return (
    <div>
      <div>Orders</div>
      <ul>{orders}</ul>
    </div>
  );
}
