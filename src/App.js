import React from 'react'
import Allroutes from './routes/Allroutes.js';
import {Header} from './components/Header'
import Footer from './components/Footer'

 const App = () => {
  return (
    <div>
      <Header/>
      <Allroutes/>
      <Footer/>
    </div>
  )
}

export default App;