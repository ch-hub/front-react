const SAVE_INPUT = 'login/CHANGE_INPUT';

export const saveInput = (input) => ({
  type: SAVE_INPUT,
  input,
});

const initialState = {
  id: '',
  pw: '',
};

function login(state = initialState, action) {
  switch (action.type) {
    case SAVE_INPUT:
      return {
        ...state,
        ...action.input,
      };
    default:
      return {
        ...state,
      };
  }
}
export default login;
