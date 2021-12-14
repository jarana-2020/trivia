const urlToken = 'https://opentdb.com/api_token.php?command=request';

const requestToken = async () => {
  const fetchTokenApi = await fetch(urlToken);
  const response = await fetchTokenApi.json();
  return response.token;
};

requestToken();

export default requestToken;
