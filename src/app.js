import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Error from './components/error/error'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import User from './pages/User/User'
import Transactions from "./pages/Transactions/Transactions";
/**
* This function contains the routing part of the website for the navigation.
*/
function App(){
return(
  <Router>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>)
}

export default App;