import axios from 'axios';
import { Filters } from '../types';

const API_BASE_URL = 'https://wizard-api.com';

export const fetchElixirs = async (filters: Filters) => {
  const query = new URLSearchParams(filters as any).toString();
  const url = `${API_BASE_URL}/elixirs?${query}`;
  const response = await axios.get(url);
  return response.data;
};
