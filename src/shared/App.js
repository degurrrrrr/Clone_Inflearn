import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Route } from "react-router";

import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import Write from "../pages/Write";
import Detail from "../pages/Detail";
import UpdatePage from "../pages/UpdatePage";

import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/ConfigStore";
import {getCookie} from "./Cookie"
import { actionCreators as userActions } from "../redux/modules/user";


function App() {
  const dispatch = useDispatch();
  const is_login = getCookie("is_login") ? true : false;
  const user = useSelector((state) => state.user);

  console.log(user);

  React.useEffect(() => {
    if (is_login) {
      dispatch(userActions.isLoginFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Background>
        <ConnectedRouter history={history}>
          <Route path="/" component={Main} exact />
          <Route path="/signup" component={SignUp} />
          <Route path="/write" component={Write} />
          <Route path="/detail/:postId" component={Detail} />
          <Route path="/update" component={UpdatePage} />
        </ConnectedRouter>
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
