import { Header } from "../../components/Header";
import { Item } from "../../components/Item";
import { Summary } from "../../components/Summary";
import { useItemsStore } from "../../store/items";
import * as S from "./home.styles";

export const Home = () => {
  const { items } = useItemsStore();
  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Faça seu pedido</S.Title>
        <S.List>
          {items.map((pizza) => (
            <Item pizza={pizza} key={pizza.id} />
          ))}
        </S.List>
      </S.Container>
      <Summary />
    </>
  );
};
