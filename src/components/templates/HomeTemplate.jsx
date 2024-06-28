import styled from "styled-components";
import { Btnsave } from "../molecules/BtnSave";
import { useAuthStore } from "../../store/AuthStore";
import { Header } from "../organisms/Header";
import { useState } from "react";
export default function HomeTemplate() {
  const [state, setState] = useState(false);
  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>

      <section className="area1"></section>

      <section className="area2"></section>

      <section className="main"></section>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(theme) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template: "header" 100px "area1" 100px "area2" 10px "main" auto;
  padding: 15px;
  .header {
    grid-area: header;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    background-color: rgba(229, 67, 26, 0.14);
    display: flex;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    background-color: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
  }
  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
    display: flex;
    align-items: center;
  }
`;
