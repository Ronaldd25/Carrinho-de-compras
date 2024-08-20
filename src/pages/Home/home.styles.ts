import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0 0;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  text-shadow: 1px 1px 1px #000;
`;

export const List = styled.ul`
  background: #fff;
  width: 90%;
  margin: 1rem auto 0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1440px) {
    width: 40%;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin: 0.5rem 0;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border: 0;
  }

  & > div {
    font-weight: bold;
    & > span:first-child {
      margin-left: 0.5rem;
      font-weight: 400;
      color: rgb(13, 239, 13);
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;

  & > button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem;
    background: #ccc;
    border-radius: 50%;
  }
`;
