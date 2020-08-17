import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Product from './component/product'
import Oneproduct from './component/oneproduct'
import Filterlaptop from './component/filterlaptop'
import Filtermobiel from './component/filtermobiel'
const Router = ()=>{
   return(
       <Switch>
           <Route path='/'exact component={Product}/>
           <Route path='/product/:id' exact component={Oneproduct}/>
           <Route path='/laptop' exact component={Filterlaptop}/>
           <Route path='/mobial' exact component={Filtermobiel}/>
       </Switch>
   )
}

export default Router