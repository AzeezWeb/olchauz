import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = { cartItems: []};

const addToCartSlice = createSlice( {
  name: 'AddToCart',
  initialState,
  reducers : {
    add(state, action) {
        state.cartItems.push(action.payload)
    },
    deleteToCart(state) {

    },

    increment(state, action) {
       state.cartItems.map((item) => {
        if(item.id === action.payload.id) {
        return  item.quantity += 1;
        } else {
        return  state.cartItems
        }
      } )

    },

    decrement(state, action) {

      state.cartItems.map((item) => {
        if(item.id === action.payload.id) {
          if(item.quantity !== 1) {
          return  item.quantity -= 1;
          } else {
           return  state.cartItems.splice(item, 1)
          }
        } else {
        return  state.cartItems
        }
      } ) 
    }


  }
})

const initialLogInState = {active : false}   

const logInSlice = createSlice( {
  name: 'logIn',
  initialState: initialLogInState,
  reducers : {
    active(state) {
      state.active = !state.active
    }
  }
})


const initialFavoriteState = { favoritItems : []}

const favoriteSlice = createSlice( {
  name: "Favorite",
  initialState: initialFavoriteState,
  reducers : {
    
    addToFavorite(state, action) {
      state.favoritItems.push(action.payload)
    },

    deleteToFavorite(state, action) {
      console.log(action.payload);
      state.favoritItems = state.favoritItems.filter(item => item.id !== action.payload.id)
    }
  }

})

export const addToCartSliceAction = addToCartSlice.actions;
export const logInSliceAction = logInSlice.actions;
export const favoriteSliceAction = favoriteSlice.actions;


const store = configureStore({
  reducer: {
    addToCart: addToCartSlice.reducer,
    logIn: logInSlice.reducer,
    favorite: favoriteSlice.reducer,
  }
});

export default store;