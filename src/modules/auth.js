import {createAction, handleActions} from "redux-actions";

const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';

export const chagneField = createAction(
    CHANGE_FIELD,
    ({key,value}) => ({
        key,
        value,
    })
)


const initialState = {
    register: {
        id: '',
        pw: '',
        pwConfirm: '',
    },
    login: {
        id: '',
        pw: '',
    }
};

const auth = handleActions(
    {
        [CHANGE_FIELD] : (state, {payload: {key,value} }) => ({
            ...state,
            register: state.key
        })
    },
    initialState,
);

export default auth;