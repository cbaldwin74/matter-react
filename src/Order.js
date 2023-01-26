import currency from "currency.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Button from "react-bootstrap/Button";

dayjs.extend(utc);
dayjs.extend(timezone);

const tz = dayjs.tz.guess();

/**
 * A component that displays the details of a single order.
 *
 * @param {*} props
 */
export default function Order(props) {
  return (
    <div className="Order">
      {dayjs(props.order.date).tz(tz).format("YYYY-MM-DD HH:mm:ss")}{" "}
      {currency(props.order.price).format()}{" "}
      <Button
        variant="danger"
        onClick={(e) => props.onDelete(props.brand, props.order.index)}
      >
        Delete
      </Button>
    </div>
  );
}
