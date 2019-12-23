import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HomePage } from './components/home/home';
import Checkout from './components/forms/CheckinPage';
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import Login from './components/auth/Login';
import { AuthUserProvider } from './components/auth/AuthUser';
import dashboard from './components/dashboard/dashboard';

const App = () => {
  return (
    <Router>
      <AuthUserProvider>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/register" component={Checkout} />
        <ProtectedRoute exact path="/dashboard" component={dashboard} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
      </AuthUserProvider>
    </Router>
  );
}

export default App;
