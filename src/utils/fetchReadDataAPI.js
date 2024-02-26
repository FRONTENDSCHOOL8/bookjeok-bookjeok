const fetchReadDataAPI = (collection, filter, filterValue) => {
  const FILTER_API = `${import.meta.env.VITE_PB_URL}api/collections/${collection}/records?filter=(${filter}="${filterValue}")`;
  return fetch(FILTER_API)
    .then((res) => res.json())
    .then((data) => {
      return data.items;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default fetchReadDataAPI;
