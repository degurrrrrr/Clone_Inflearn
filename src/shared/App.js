import React from "react";
import { Route } from "react-router";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import Write from "../pages/Write";
import Detail from "../pages/Detail";
import Header from "../component/Header";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <React.Fragment>
      <Background>
        <BrowserRouter>
          <Route path="/" component={Main} exact />
          <Route path="/signup" component={SignUp} />
          <Route path="/write" component={Write} />
          <Route path="/detail" component={Detail} />
        </BrowserRouter>
      </Background>
    </React.Fragment>
  );
}

const Background = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: #f8f9fa;
`;

export default App;
