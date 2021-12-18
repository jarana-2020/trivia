import md5 from 'crypto-js/md5';

const url = 'https://www.gravatar.com/avatar/';

const getGravatar = async (email) => {
  const hash = md5(email).toString();
  const fetchGravatar = await fetch(`${url}${hash}`);
  const response = await fetchGravatar.json();
  return response;
};

export default getGravatar;