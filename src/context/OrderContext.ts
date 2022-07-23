import { createContext, useEffect, useState } from "react";
import { OrderProps } from "./types";

export const OrderContext = createContext({});

export function OrderProvider({ children }: any) {
  const [order, setOrder] = useState(false);

  useEffect(() => {
  }, []);

 

  return (
    <OrderContext.Provider value={{ order }}>
      {children}
    </OrderContext.Provider>
  );
}