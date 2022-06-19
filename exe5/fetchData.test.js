const fetchData = require("./fetchData");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: 82,
        url: "https://www.tvmaze.com/shows/82/game-of-thrones",
        name: "Game of Thrones",
      }),
  })
);

beforeEach(()=>{
  fetch.mockClear();
})

test("should return json object", async () => {

  const data = await fetchData();

  const mockData = {
    id: 82,
    url: "https://www.tvmaze.com/shows/82/game-of-thrones",
    name: "Game of Thrones",
  };

  expect(data).toEqual(mockData);
  expect(fetch).toHaveBeenCalledTimes(1);

});

test('handles exception with null', async () => { 

  fetch.mockImplementationOnce(()=> Promise.reject("API Failure"));
  const data = await fetchData();

  expect(data).toEqual(null);
  expect(fetch).toHaveBeenCalledWith(`https://api.tvmaze.com/shows/82`);
  
 })
