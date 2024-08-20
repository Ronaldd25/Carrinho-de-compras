import { MdDelete } from "react-icons/md";
import { Header } from "../../components/Header";
import { useItemsStore } from "../../store/items";
import { Container, List, ListItem, Title } from "../Home/home.styles";
import { SummaryStyled } from "../../components/Summary";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Button = styled.button`
  border: 0;
  background: transparent;
`;

export const Cart = () => {
  const { items } = useItemsStore();
  const [cartItems, setCartItems] = useState(items);

  const totalPrice = cartItems.reduce((acc, pizza) => {
    return acc + pizza.quantity * pizza.price;
  }, 0);

  const removeItem = (id: number) => {
    const itemRemoved = cartItems.filter((pizza) => pizza.id !== id);
    setCartItems(itemRemoved);
  };

  return (
    <section>
      <Header />
      <Container>
        <Title>Resumo do pedido</Title>
        <List>
          {totalPrice === 0 && <h3>Não ha items no seu carrinho</h3>}
          {cartItems
            .filter((pizza) => pizza.quantity > 0)
            .map((pizza) => (
              <ListItem>
                <div>
                  {pizza.name} : {pizza.quantity}
                </div>
                <Button onClick={() => removeItem(pizza.id)}>
                  <MdDelete />
                </Button>
              </ListItem>
            ))}
        </List>
      </Container>
      <SummaryStyled as="div">
        <span>
          Valor da compra: <strong>R${totalPrice}</strong>
        </span>
        <Link to="/cart" onClick={() => alert("obrigado pela preferência '_'")}>
          Checkout
        </Link>
      </SummaryStyled>
    </section>
  );
};
