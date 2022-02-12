import aspida from '@aspida/fetch';
import api from './$api';

const fetchConfig = {
	baseURL: 'http://localhost:3000/'
};

export const fetcher = api(aspida(fetch, fetchConfig));
