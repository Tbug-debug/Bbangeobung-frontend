import Router from "./shared/Router";
import Layout from "./layout/Layout";
import Reset from "./styles/Reset";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/Theme/Theme";
import { ThemeProvider } from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
