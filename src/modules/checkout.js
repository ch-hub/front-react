const INIT_CHECKOUT = 'checkout/INIT_CHECKOUT';

export const initCheckout = (input) => ({
  type: INIT_CHECKOUT,
  input,
});

const initialState = {
  orders: [
    {
      productIdx: 0,
      name: 'sample_product',
      price: 'sample_product_price',
      qty: 'sample_product_qty',
    },
  ],
};

function checkout(state = initialState, action) {
  switch (action.type) {
    case INIT_CHECKOUT:
      return {
        ...state,
        orders: [action.input],
      };
    default:
      return {
        ...state,
      };
  }
}

export default checkout;
