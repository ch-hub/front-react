const START_MODAL = 'info/START_MODAL';
const END_MODAL = 'info/END_MODAL';

export const startModal = ({ text, color }) => ({
  type: START_MODAL,
  text,
  color,
});

export const endModal = () => ({
  type: END_MODAL,
});

const initialState = {
  isAlert: false,
  text: 'none',
  color: 'none',
};
function info(state = initialState, action) {
  switch (action.type) {
    case START_MODAL:
      return {
        ...state,
        isAlert: true,
        text: action.text,
        color: action.color,
      };
    case END_MODAL:
      return {
        ...state,
        isAlert: false,
        text: '',
        color: 'none',
      };
    default:
      return {
        ...state,
      };
  }
}

export default info;
