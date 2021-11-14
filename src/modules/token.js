const KLAY_PRICE = 'token/KLAY_PRICE';

export const saveKlayPrice = (price) => ({
  type: KLAY_PRICE,
  price,
});

const initialState = {
  klay: 0,
};

function token(state = initialState, action) {
  switch (action.type) {
    case KLAY_PRICE:
      return {
        ...state,
        klay: action.price,
      };
    default:
      return {
        ...state,
      };
  }
}

export default token;
