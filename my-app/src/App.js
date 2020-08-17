import React from 'react';
import  Router from './Router'
import {BrowserRouter} from 'react-router-dom'

const App = () =>{
  return(
    <div>
      <BrowserRouter>
         <Router/>
      </BrowserRouter>
    </div>
  )
}

export default App;
