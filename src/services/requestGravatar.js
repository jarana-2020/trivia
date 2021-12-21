import md5 from 'crypto-js/md5';

const url = 'https://www.gravatar.com/avatar/';

const getGravatar = (email) => {
  const hash = md5(email).toString();
  return `${url}${hash}`;
};

export default getGravatar;
