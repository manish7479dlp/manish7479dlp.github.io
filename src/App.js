import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'

const App = () =>{
  return(
    <>
      <BrowserRouter>
              <Navigation/>
      </BrowserRouter>
      <Footer/>
    
        
    </>
  )
}

export default App;