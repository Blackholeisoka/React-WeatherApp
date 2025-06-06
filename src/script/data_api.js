const fetchApi = async (city) => {
  let url = city
    ? `https://wttr.in/${city}?format=j1`
    : 'https://wttr.in/agen?format=j1';

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchApi;