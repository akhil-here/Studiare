import {combineReducers} from 'redux';

const initProducts = {
  numberCart: 0,
  cart: [],
  price: [],
  _products: [],
  photo: [],
  events_enrolled: []
};

export const initialState = null;

export const reducer = (state, action) => {
  if (action.type === 'USER') {
    return action.payload;
  }
  if (action.type === 'CLEAR') {
    return null;
  }
  return state;
};

function cartItems (state = initProducts, action) {
  // console.log (state);
  // console.log (action.payload);

  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        _products: state.cart.push (action.payload.product),
        _products: state.price.push (action.payload.price),
        _products: state.photo.push (action.payload.photo),
        numberCart: state.cart.length ,
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        _products: state.cart.splice (action.payload.index, 1),
        _products: state.price.splice (action.payload.index, 1),
        _products: state.photo.splice (action.payload.index, 1),
        numberCart: state.cart.length ,
      };
    case 'ENROLLED':
      return {
        ...state,
        _products: state.events_enrolled.push (action.payload.id),
        numberCart: state.cart.length ,
      };
    case 'UNENROLLED':
      return {
        ...state,
        _products: state.events_enrolled.splice( state.events_enrolled.indexOf(action.payload.id,1) ),
        numberCart: state.cart.length ,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers ({
  _cartItems: cartItems,
});

export default rootReducer;
