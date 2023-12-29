
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Header from "./componets/Header";
import Home from "./componets/Home";
import Contact from "./componets/Contact";
import Services from "./componets/Services";
import Footer from "./componets/Footer.jsx";


import './style/App.scss'
import './style/header.scss';
import './style/home.scss';
import './style/footer.scss';
import './style/contact.scss';
import './style/mediaquery.scss';


function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
