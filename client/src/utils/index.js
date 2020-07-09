const FILES_URI = process.env.REACT_APP_FILES_URI || '//localhost:4000/f/';

const getFilesUri = (path) => {
  return `${FILES_URI}${path}`;
};

export { getFilesUri };
