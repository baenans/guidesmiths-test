import axios from 'axios';
import { getApiUri } from '../utils';

const _request = async (method, url, data = {}) => {
  const options = { method, url, data };
  try {
    const result = await axios(options);
    return result.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw Error(error.response.data.message);
    }
    throw Error('Failed request');
  }
};

const phones = (() => {
  const endpoint = getApiUri('/api/phones');

  const list = async () => {
    return _request('get', endpoint);
  };

  return {
    list,
  };
})();

export const api = { phones };
