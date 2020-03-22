export const API_NEWS = 'http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=54d7035315ac4ea9a1a10cc43d923af5';

export const getData = async (url: string) => {
  const response = await fetch(url);

  return response.json();
};
