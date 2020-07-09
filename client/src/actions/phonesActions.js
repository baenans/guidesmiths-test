import {
  SET_PHONES,
  SELECT_PHONE,
  DISMISS_SELECTED_PHONE,
} from '../constants/actionTypes';

const setPhones = (phones) => {
  return { type: SET_PHONES, phones };
};

const selectPhone = (phone) => {
  return { type: SELECT_PHONE, phone };
};

const dismissSelectedPhone = (phone) => {
  return { type: DISMISS_SELECTED_PHONE };
};

export const phonesActions = {
  setPhones,
  selectPhone,
  dismissSelectedPhone,
};
