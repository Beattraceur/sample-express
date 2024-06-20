import fetch from 'node-fetch'; //fetch module for async requests

const routeHello = () => 'Hello World!'; //route for /hello endpoint

const routesAPINames = async () => {
  //route for /api/names endpoint
  const url = 'https://www.usemodernfullstack.dev/api/v1/users';
  let data; //defined outside the try scope
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (err) {
    return err;
  }
  const names = data
    .map((item) => `id: ${item.id}, name: ${item.name}`)
    .join('<br>');
  return names;
};

export { routeHello, routesAPINames };
