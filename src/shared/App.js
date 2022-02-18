import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Write from '../pages/Write';
import Detail from '../pages/Detail';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Main} exact/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/write" component={Write}/>
      <Route path="/detail" component={Detail}/>
    </div>
  );
}

export default App;
