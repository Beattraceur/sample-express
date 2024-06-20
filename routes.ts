import fetch from 'node-fetch'; //fetch module for async requests

const routeHello = (): string => 'Hello World!'; //route for /hello endpoint

const routesAPINames = async (): Promise<string> => {
  //route for /api/names endpoint
  const url = 'https://www.usemodernfullstack.dev/api/v1/users';
  let data: responseItemType[]; //defined outside the try scope
  try {
    const response = await fetch(url);
    data = (await response.json()) as responseItemType[];
  } catch (err) {
    return err;
  }
  const names = data
    .map((item) => `id: ${item.id}, name: ${item.name}`)
    .join('<br>');
  return names;
};

const routeWeather = (query: WeatherQueryInterface): WeatherDetailType =>
  queryWeatherData(query);

const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
  return {
    zipcode: query.zipcode,
    weather: 'sunny',
    temp: 35,
  };
};
export { routeHello, routesAPINames, routeWeather };
