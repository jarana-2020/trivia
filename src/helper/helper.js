export const maxTimer = 30;
export const oneSecond = 1000;

// consulted page https://www.horadecodar.com.br/2021/05/10/como-embaralhar-um-array-em-javascript-shuffle/

export const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const calcScore = (timer, level) => {
  const defaultPoint = 10;
  const hardValue = 3;

  switch (level) {
  case 'easy':
    return defaultPoint + (timer * 1);
  case 'medium':
    return defaultPoint + (timer * 2);
  case 'hard':
    return defaultPoint + (timer * hardValue);
  default:
    break;
  }
};

export const fetchQuestions = async (url) => {
  const fetchData = await fetch(url);
  const result = await fetchData.json();
  return result;
};

export const b64ToUtf8 = (str) => decodeURIComponent(atob(str));

export default maxTimer;
