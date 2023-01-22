import currency from "currency.js";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import Button from "react-bootstrap/Button";

dayjs.extend(utc);
dayjs.extend(timezone);

const tz = dayjs.tz.guess();

export default function Order(props) {
  return (
    <div>
      {dayjs(props.order.date).tz(tz).format("YYYY-MM-DD HH:mm:ss")}{" "}
      {currency(props.order.price).format()}{" "}
      <Button variant="danger">Delete</Button>
    </div>
  );
}
