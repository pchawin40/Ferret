// import react
import React, { useState, useEffect } from 'react';

// import react-router-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import component
import LandingPage from './components/LandingPage';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} >
          {/* LandingPage */}
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
