import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Error from './Components/Error/error'
import Home from './Pages/Home/home'
import SignIn from './pages/SignIn/SignIn'
import User from './pages/User/User'

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
        <Route path="/*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>)
}

export default App;