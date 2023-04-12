import { Order } from "../../types/Order";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardsProps {
  icon: string;
  title: string;
  //dessa forma ele entende como um array de objeto.
  orders: Order;
}

export function OrdersBoard({icon, title}: OrdersBoardsProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  );
}
