import React, { Component } from 'react'
import Lenovo from '../images/lenovo.jpg'
import {Link} from 'react-router-dom'
import Mobile from '../images/mobial.jpg'


class Product extends Component {
    state = {
        products:[],
        form:'',
        show:[]
    }
    handleChange = (name)=>((e)=>{
      this.setState({[name]:e.target.value})
    })
       
    
    
   
componentDidMount(){
    fetch('https://aveosoft-react-assignment.herokuapp.com/products')
    .then(res=>{
        return res.json()
    }).then((result)=>{
        this.setState({products: result})                             
    })
}                         



    render() {
      const filters = this.state.products.find(product =>product.name.toLowerCase().trim() === this.state.form.toLowerCase().trim())
      console.log(filters)
        const {products,form} = this.state
        return(
            <div className="container">  
          <div className="input-group mt-5 mb-3">  
        <div class="input-group-prepend">
          <input type='text'   onChange={this.handleChange('form')} placeholder='Search' value={form}  className="form-control mr-3"/>                            
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
                    {filters === undefined?products.map((product,i)=>
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
                ):
                (      
                   
                 <div key={'mk'} className="card col-md-4" style={{width: "18rem;"}}>
                  {filters.categoryId ===1?<img style={{height:'200px',width:'auto'}} className='img-thumbnail' src={Mobile} alt={filters.name}/>:<img style={{height:'200px',width:'auto'}} className='img-thumbnail' src={Lenovo} alt={filters.name}/>}
                 <div className="card-body">
                 <h5 className="card-title">{filters.name}</h5>
                   <p className="card-text">{filters.model}</p>
                   <p className="card-text">{filters.price}</p>

                   <Link to={`/product/${filters.id}`}  className="btn btn-raised btn-primary btn-sm">View Product</Link>
                 </div>
               </div>
                )
             }
                 </div>
            </div>
        )
    }
}

export default  Product