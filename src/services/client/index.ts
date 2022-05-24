import axios from 'axios';
import md5 from 'md5';

export function setupAPI() {
  const publicKey = '7c9d0981ca0b182a60d9bab410e81c4f';
  const privateKey = 'bda1a3344a65c93ffa8aa22355c283048c9dfc8b';
  const ts = Number(new Date());
  const hash = md5(ts + privateKey + publicKey);

  const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
      ts,
      apikey: publicKey,
      hash
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      'Accept': '/'
    }
  });

  return api;
}

export const api = setupAPI();
