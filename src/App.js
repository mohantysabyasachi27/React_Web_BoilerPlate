import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './components/home/Home';
import RegisterForm from './components/forms/RegisterForm';
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import Login from './components/auth/Login';
import { AuthUserProvider } from './components/auth/AuthUser';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <AuthUserProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={RegisterForm} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
      </AuthUserProvider>
    </Router>
  );
}

export default App;
