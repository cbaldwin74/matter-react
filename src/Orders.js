import Order from "./Order";

export default function Orders(props) {
  const orders = props.orders.map((x, index) => (
    <li key={index}>
      <Order order={x} />
    </li>
  ));
  return (
    <div>
      <ul>{orders}</ul>
    </div>
  );
}
