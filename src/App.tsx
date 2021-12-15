import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppContainer, Container } from "./App.styles";
import AddProduct from "./View/AddProduct/AddProduct";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./View/Home/Home";
import NotFound404 from "./View/NotFound404/NotFound404";
import StoreProvider from "./Context/Store";
import { routes } from "./constants";

import "./App.styles.ts";
import Store from "./View/Store/Store";

function App() {
  return (
    <AppContainer>
      <Header />
      <StoreProvider>
        <Container>
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.store} element={<Store />} />
              <Route path={routes.add} element={<AddProduct />} />
              <Route path={routes.notFound} element={<NotFound404 />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </AnimatePresence>
        </Container>
      </StoreProvider>
      <Footer />
    </AppContainer>
  );
}

export default App;
