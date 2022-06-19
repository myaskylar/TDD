const fetchData = async () => {
  try {
    const res = await fetch("https://api.tvmaze.com/shows/82");

    const data = await res.json();
    return data;
  } catch (err) {
     return null;
  }
};



module.exports = fetchData;
