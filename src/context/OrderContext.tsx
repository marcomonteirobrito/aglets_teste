import { createContext, useEffect, useState } from "react";
import api from "../services";

export const OrderContext = createContext({});

const OrderProvider = ({ children }: any) => {
  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const orderResponse = await api.get("/prova/prova.json");

    setOrders(orderResponse.data);
  };

  const getOrderId = (orderId: string) => {
    return orders.filter((item: any) => item.orderId === orderId);
  };

  return (
    <OrderContext.Provider value={{ orders, getOrderId }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
