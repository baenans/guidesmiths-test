import {
  SET_PHONES,
  SELECT_PHONE,
  DISMISS_SELECTED_PHONE,
} from '../constants/actionTypes';

const initialState = {
  loading: true,
  phones: [],
  selectedPhone: null,
};

const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONES:
      return { ...state, phones: action.phones, loading: false };
    case SELECT_PHONE:
      return { ...state, selectedPhone: action.phone };
    case DISMISS_SELECTED_PHONE:
      return { ...state, selectedPhone: null };
    default:
      return state;
  }
};

export { phonesReducer };
