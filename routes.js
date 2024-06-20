var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from 'node-fetch'; //fetch module for async requests
const routeHello = () => 'Hello World!'; //route for /hello endpoint
const routesAPINames = () => __awaiter(void 0, void 0, void 0, function* () {
    //route for /api/names endpoint
    const url = 'https://www.usemodernfullstack.dev/api/v1/users';
    let data; //defined outside the try scope
    try {
        const response = yield fetch(url);
        data = (yield response.json());
    }
    catch (err) {
        return err;
    }
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join('<br>');
    return names;
});
const routeWeather = (query) => queryWeatherData(query);
const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode,
        weather: 'sunny',
        temp: 35,
    };
};
export { routeHello, routesAPINames, routeWeather };
