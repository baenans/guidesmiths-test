import { SET_PHONES } from '../constants/actionTypes';

const setPhones = (phones) => {
  return { type: SET_PHONES, phones };
};

export const phonesActions = { setPhones };
