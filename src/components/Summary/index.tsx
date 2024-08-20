import styled from "styled-components";
import { List } from "../Item/itemList.styles";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cart";
import { useItemsStore } from "../../store/items";

export const SummaryStyled = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1440px) {
    width: 40%;
  }

  & span > strong {
    color: rgb(13, 239, 13);
  }

  & > a {
    margin: 1rem 0 0;
    border-radius: 4px;
    font-weight: 700;
    text-align: center;
    padding: 1rem 0;
    background: #ffb116;
    color: inherit;
    text-decoration: none;
    transition: all 0.2s;

    @media (min-width: 768px) {
      width: 70%;
      margin: 1rem auto 0;
    }

    &:hover {
      background: #e45f07;
      color: white;
    }
  }
`;

export const Summary = () => {
  const { setCartItems } = useCartStore();
  const { items } = useItemsStore();

  const totalItems = items.reduce((acc, pizza) => {
    return acc + pizza.quantity;
  }, 0);

  const totalPrice = items.reduce((acc, pizza) => {
    return acc + pizza.quantity * pizza.price;
  }, 0);

  return (
    <SummaryStyled as={"div"}>
      <span>
        Total de items: <b>{totalItems}</b>
      </span>
      <span>
        Preço: <strong>R${totalPrice}</strong>
      </span>
      <Link to="/cart" onClick={() => setCartItems(items)}>
        Ir para o carrinho <FiShoppingCart />
      </Link>
    </SummaryStyled>
  );
};
