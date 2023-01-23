import Order from "./Order";

export default function Orders(props) {
  const orders = props.orders.map((x, index) => {
    let order = {
      ...x,
      index
    };

    return (
      <li key={index}>
        <Order brand={props.brand} order={order} />
      </li>
    );
  });

  return (
    <div>
      <ul>{orders}</ul>
    </div>
  );
}
