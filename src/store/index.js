import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = { cartItems: []};

const addToCartSlice = createSlice( {
  name: 'AddToCart',
  initialState,
  reducers : {
    add(state, action) {
        // if(state.cartItems.length !== 0 ) {
        //   state.cartItems.map((product) => {
        //     if(product.id === action.payload.id) {
        //      return product.quantity += 1; 
        //     } else {
        //       return state.cartItems.push(action.payload)
        //     }
        //   })
        // } else { 
        //   state.cartItems.push(action.payload)
        // }
        state.cartItems.push(action.payload)
    },
    deleteToCart(state) {

    },

    increment(state, action) {
      state.cartItems[action.payload].quantity += 1;
    },

    decrement(state, action) {
      if(state.cartItems[action.payload].quantity === 1) {
        state.cartItems.splice(action.payload, 1)
      } else {
        state.cartItems[action.payload].quantity -= 1;
      }      

    }


  }
})

  
export const addToCartSliceAction = addToCartSlice.actions;

const store = configureStore({
  reducer: addToCartSlice.reducer,
});

export default store;