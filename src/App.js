import React from 'react'
import Product from './components/Product'
import Cart from './components/Cart'
import products from './products.json'

const App = () => {
  return (
    <div>
    <Cart/>
    <div className='container'>
    <div className='row'>
          {products.map((product) => (
            <div className='col-md-4' key={product.id}>
              <Product {...product} />
            </div>
          ))}
        </div>
       </div>
    </div>
  )
}

export default App