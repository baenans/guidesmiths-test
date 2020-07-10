const API_URI = process.env.REACT_APP_API_URI || '//localhost:4000';
const FILES_URI = process.env.REACT_APP_FILES_URI || '//localhost:4000/f/';

const getApiUri = (path) => {
  return `${API_URI}${path}`;
};

const getFilesUri = (path) => {
  return `${FILES_URI}${path}`;
};

export { getFilesUri, getApiUri };
