import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/slice/cartSlice';

const Product = (props) => {

    const dispatch = useDispatch();

    const addNewItem = (props) => {
        dispatch(addItem({name : props.productName , price : props.price}))
    }

  return (
    <div className="card m-2" style={{maxWidth:'350px'}}>
        <image className="card-img-top" src={props.image} alt={props.productName} />
        <div className="card-body">
            <h5 className="card-title">{props.productName}</h5>
            <p className="card-text">Rs. {props.price}/-</p>
            <button className="btn btn-primary" onClick={() => {addNewItem(props)}}>Add to Cart</button>
        </div>
</div>
  )
}

export default Product
