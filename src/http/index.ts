import axios from 'axios';

const apiKey = 'c42107315ffc1c8988fd519c28786bcfad64d8546f3473e401b734dffa38cb57';

export const cryptoHttp = axios.create ({ 
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `Apikey ${apiKey}`
    }
});