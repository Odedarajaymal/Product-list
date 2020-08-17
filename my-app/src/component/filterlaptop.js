import React, { Component } from 'react'
import Lenovo from '../images/lenovo.jpg'
import {Link} from 'react-router-dom'

class Filterlaptop extends Component {
    state = {
        products:[],
        filters:[]
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

    const filters = this.state.products.filter((product)=> {
        return product.categoryId === 0
        
    }) 
    return (
        <div className="container">
                <div className="row">
                {filters.map((filter,i)=>
                   (            
                    <div key={i} className="card col-md-4" style={{width: "18rem;"}}>
                     <img style={{height:'200px',width:'auto'}} className='img-thumbnail' src={Lenovo} alt={filter.name}/>
                    <div className="card-body">
                    <h5 className="card-title">{filter.name}</h5>
                      <p className="card-text">{filter.model}</p>
                      <p className="card-text">{filter.price}</p>
                      <Link to={`/product/${filter.id}`}   className="btn btn-raised btn-primary btn-sm">View Product</Link>
                    </div>
                  </div>
                   )
                )}   
                 </div>
            </div>
        )
    }
}

export default Filterlaptop