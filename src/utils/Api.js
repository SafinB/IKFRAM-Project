export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0dbcf643f8mshbd2fe65f43a834ap15329bjsna86e74d97c28',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const api = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
