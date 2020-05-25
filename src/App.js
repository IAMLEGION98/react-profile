import React from 'react';
import { BrowserRouter, Switch,Route } from "react-router-dom";
import MainProfile from "./MainProfile";

import './App.css';

function App() {
  const routes = [
    {
      path: "/",
      exact: true,
      component: () => <MainProfile />,
    },
    
    
  ];
  return (
    <div>
     <BrowserRouter>
     <Switch>
     {routes.map((route, index) => (
              <Route
                key = {index}
                path = {route.path}
                exact = {route.exact}
                children = {<route.component />}
              />
            ))}
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
