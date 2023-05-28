import React, {useState} from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { temaOscuro, temaClaro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {

  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    setTema((tema) => !tema);
  }

  return (
    <ThemeProvider theme={tema? temaOscuro : temaClaro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
