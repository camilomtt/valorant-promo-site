import axios from 'axios'
import { URL_BASE } from './constants';

export const client = axios.create({
  baseURL: URL_BASE,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})