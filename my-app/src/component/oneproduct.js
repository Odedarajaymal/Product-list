import React,{Component} from 'react'
import Lenovo from '../images/lenovo.jpg'
import Mobile from '../images/mobial.jpg'
class Oneproduct extends Component {
    state = {
        products:[],
    }  
componentDidMount(){
    const id =this.props.match.params.id
 

    fetch(`https://aveosoft-react-assignment.herokuapp.com/products/${id}`)
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
                <div className="row">
                <div key={products.id} className="card col-md-4" style={{width: "18rem;"}}>
                {products.categoryId ===1?<img style={{height:'200px',width:'auto'}} className='img-thumbnail' src={Mobile} alt={products.name}/>:<img style={{height:'200px',width:'auto'}} className='img-thumbnail' src={Lenovo} alt={products.name}/>}
                    <div className="card-body">
                        <h5 className="card-title">{products.name}</h5>
                      <p className="card-text">{products.price}</p>
                      <p className="card-text">{products.description}</p>
                    </div>
                  </div>
                 </div>
            </div>
        )
    }
}

export default Oneproduct