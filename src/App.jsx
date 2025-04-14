import { useState } from 'react';
import Main from './Components/Home/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbr/Navbr';
import CalculatorNav from './Components/Calcultors/CalculatorNav';
import FriendsAndEnemy from './Components/Calcultors/FriendsAndEnemy/FriendsAndEnemy';
import BlessingYear from './Components/Calcultors/BlessingYear/BlessingYear';
import PrivacyPolicy from './Components/TermsAndConditions/PrivacyPolicy';
import CancellationRefundPolicy from './Components/TermsAndConditions/CancellationRefundPolicy';
import ShippingAndDeliveryPolicy from './Components/TermsAndConditions/ShippingAndDeliveryPolicy';
import About from './Components/Home/About';
// import Navbar from './Components/Navbr/Navbr';

function App() {


  return (
    <Router>
      <Navbar /> {/* Added the Navbar component here */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Calculators" element={<CalculatorNav />} />
        <Route path="/About" element={<About />} />
        <Route path="/Calculators/FriendsAndEnemy" element={<FriendsAndEnemy />} />
        <Route path="/Calculators/BlessingYear" element={<BlessingYear />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/CancellationRefundPolicy" element={<CancellationRefundPolicy />} />
        <Route path="/ShippingAndDeliveryPolicy" element={<ShippingAndDeliveryPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
