import React from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import * as styles from "./style";

function App() {
  return (
    <styles.AppContent>
      <styles.GlobalStyle />
      <Header />
      <styles.Content>
        <Content />
      </styles.Content>
    </styles.AppContent>
  );
}

export default App;
