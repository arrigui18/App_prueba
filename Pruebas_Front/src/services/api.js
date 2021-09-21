import axios from 'axios';

const api_key_tiempo = "9d7a00f7b2d5a4fd2bd3dd208d105e8b";
const api_key_noticias = "88e0eeb2b1794a469077c2856baf1af5";
const baseUrl = ('http://localhost/ARRIGUI/prueba/PHP/history.php');

export const ConsumoTiempo = async(data) => {
    return await axios
        .get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: data.ciudad,
                appid: api_key_tiempo
            }
        })
        .then(response => {
            return response;
        })
        .catch(function(error) {
            console.log(error)
        });
}

export const ConsumoNoticias = async(data) => {
    return await axios
        .get("https://newsapi.org/v2/everything", {
            params: {
                q: data.ciudad,
                from: '2021-08-21',
                sortBy: 'publishedAt',
                apiKey: api_key_noticias,
                language: 'es'
            }
        })
        .then(response => {
            return response;
        })
        .catch(function(error) {
            console.log(error)
        });
}
export const HistorialGET = () => {
    return axios
        .get(`${baseUrl}`)
        .then(response => {
            return response;
        })
        .catch(function(error) {
            console.log(error)
        });
}

export const HistoryPOST = async(data) => {
    return await axios
        .post(`${baseUrl}`, data)
        .then(response => {
            return response;
        })
        .catch(function(error) {
            console.log(error)
        });
}