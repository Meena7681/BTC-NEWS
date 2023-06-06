import React from 'react';
import { Navbar} from './components/Navbar';
import Home  from './Pages/Home'
import { BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import FetchData from "./components/FetchData"
// import Footer from "./components/Footer"

const App = ()=>{
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route exact path='/'  element={<Home />}/>
         <Route path="genral" element={<FetchData cat="genral" />} />
          <Route path="business" element={<FetchData cat="business" />} />
          <Route path="/entertainment" element={<FetchData cat="entertainment" />} />
          <Route path="/health" element={<FetchData cat="health" />} />
          <Route path="/science" element={<FetchData cat="science" />} />
          <Route path="/sports"  element={<FetchData cat="sports" />} />
          <Route path="/technology" element={<FetchData cat="technology" />} />
      </Routes>
      {/* <Footer /> */}
    </Router> 
   );
}
export default App
