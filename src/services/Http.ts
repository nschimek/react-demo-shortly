import axios from 'axios';

const HTTP_HEADERS_JSON = { 'Content-Type': 'application/json' };
const API_URL = 'https://api.shrtco.de/v2';

export const http = axios.create({
  baseURL: API_URL,
  headers: HTTP_HEADERS_JSON,
});
