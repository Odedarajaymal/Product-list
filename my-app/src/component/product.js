import React, { Component } from 'react'
import Lenovo from '../images/lenovo.jpg'
import {Link} from 'react-router-dom'
import Mobile from '../images/mobial.jpg'


class Product extends Component {
    state = {
        products:[],
    }  
componentDidMount(){
    fetch('https://aveosoft-react-assignment.herokuapp.com/products')
    .then(res=>{
        return res.json()
    }).then((result)=>{
        this.setState({products: result})
    })
}

    render() {
        const {products} = this.state
        return(
            <div className="container">  
          <div className="input-group mt-5 mb-3">
        <div class="input-group-prepend">                             
         <button type="button" className="btn btn-outline-secondary">Product Category</button>
        <button type="button" className="btn btn-outline-secondary  dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <Link to='/laptop'>Laptop</Link>
        </button>
        <button type="button" className="btn btn-outline-secondary  dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <Link to='/mobial'>Mobile</Link>
        </button>
        </div>
        </div>
                <div className="row">
                {products.map((product,i)=>
                   (            
                    <div key={i} className="card col-md-4" style={{width: "18rem;"}}>
                     {product.categoryId ===1?<img style={{height:'200px',width:'auto'}} className='img-thumbnail' src={Mobile} alt={product.name}/>:<img style={{height:'200px',width:'auto'}} className='img-thumbnail' src={Lenovo} alt={product.name}/>}
                    <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.model}</p>
                      <p className="card-text">{product.price}</p>
                      <Link to={`/product/${product.id}`}  className="btn btn-raised btn-primary btn-sm">View Product</Link>
                    </div>
                  </div>
                   )
                )}   
                 </div>
            </div>
        )
    }
}

export default  Product