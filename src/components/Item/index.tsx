import { FiPlus, FiMinus } from "react-icons/fi";
import * as S from "./itemList.styles";
import { ItemType } from "../../store/cart";
import { useItemsStore } from "../../store/items";

type ItemProps = {
  pizza: ItemType;
};

export const Item = ({ pizza }: ItemProps) => {
  const { items, setItems } = useItemsStore();

  const setQuantity = (id: number, action: string) => {
    const newQuantity = items.map((pizza) => {
      if (pizza.id === id && action === "inc") {
        return { ...pizza, quantity: pizza.quantity + 1 };
      } else if (pizza.id === id && action === "dec" && pizza.quantity > 0) {
        return { ...pizza, quantity: pizza.quantity - 1 };
      }
      return pizza;
    });

    setItems(newQuantity);
  };

  return (
    <S.ListItem>
      <div>
        {pizza.name} -<span>R$ {pizza.price}</span>
      </div>
      <S.Quantity>
        <button onClick={() => setQuantity(pizza.id, "inc")}>
          <FiPlus />
        </button>
        <span>{pizza.quantity}</span>
        <button onClick={() => setQuantity(pizza.id, "dec")}>
          <FiMinus />
        </button>
      </S.Quantity>
    </S.ListItem>
  );
};
