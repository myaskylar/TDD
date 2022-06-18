const fetchData = async (api) => {
  try {
    const res = await fetch(api);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

 const api = "https://api.tvmaze.com/shows/82/episodes";

 console.log(fetchData(api));
// module.exports = fetchData;
