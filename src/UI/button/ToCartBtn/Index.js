import './ToCartBtn.css';
import { IoCartOutline } from 'react-icons/io5'
import { useDispatch } from "react-redux";
import { addToCartSliceAction } from "../../../store";

function ToCartBtn( { product }) {


  const dispatch = useDispatch();

  const addToCartHandler = (product) => { 
    dispatch( addToCartSliceAction.add(product));
  }
  return ( 
    <button onClick={() => addToCartHandler(product)} className="to-cart__container">
      <IoCartOutline/>
    </button>
   );
}

export default ToCartBtn;