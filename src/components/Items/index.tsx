import styles from "../../styles/Items/Items.module.scss";

const Items = ({ order }: any) => {
  console.log("order", order);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Total</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {order?.items?.map((item: any) => (
            <tr key={item?.id}>
              <td>{item?.name}</td>
              <td>{item?.quantity}</td>
              <td>{item?.sellingPrice}</td>
              <td>
                {
                  order?.totals?.filter((total: any) => total.id === "Items")[0]
                    ?.value
                }
              </td>
              <td>
                <a href={`${item?.imageUrl}`} target="_blank" rel="noreferrer">
                  foto
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
