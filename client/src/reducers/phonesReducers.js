import { SET_PHONES } from '../constants/actionTypes';

const initialState = {
  loading: true,
  phones: [],
};

const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONES:
      return { ...state, phones: action.phones, loading: false };
    default:
      return state;
  }
};

export { phonesReducer };
