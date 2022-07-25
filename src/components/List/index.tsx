import { useContext } from "react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

import { OrderContext } from "../../context/OrderContext";

// import styles from "../../styles/List/List.module.scss";

const List = () => {
  const { orders } = useContext<any>(OrderContext);
  const formatDate = (date: any) => {
    return format(parseISO(date), "dd/MM/y");
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Numero pedido</th>
          <th>Status do pedido</th>
          <th>Data do pedido</th>
          <th>Valor total do pedido</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order: any) => (
          <tr key={order.orderId}>
            <td>
              <Link to={`order/${order.orderId}`} target="_blank">
                {order.orderId}
              </Link>
            </td>
            <td>{order.statusDescription}</td>
            <td>{formatDate(order.creationDate)}</td>
            <td>{order.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
