import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 100,
    duration: '30s',
};

export default function () {
  http.get(`http://localhost:3001/products/${Math.floor(Math.random() * 10000000) + 1}`);
  sleep(1);
}