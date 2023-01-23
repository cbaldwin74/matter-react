import currency from "currency.js";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import { useDispatch } from "react-redux";
import utc from "dayjs/plugin/utc";
import Button from "react-bootstrap/Button";
import { deleteOrder } from "./store/orders/ordersSlice";

dayjs.extend(utc);
dayjs.extend(timezone);

const tz = dayjs.tz.guess();

export default function Order(props) {
  const dispatch = useDispatch();

  function handleDelete(e) {
    dispatch(
      deleteOrder({
        index: props.order.index,
        name: props.brand
      })
    );
  }

  return (
    <div>
      {dayjs(props.order.date).tz(tz).format("YYYY-MM-DD HH:mm:ss")}{" "}
      {currency(props.order.price).format()}{" "}
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
}
