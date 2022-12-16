import { createClient } from 'altogic';

const ENV_URL = 'https://e-commerce.c1-europe.altogic.com';
const CLIENT_KEY = '247e82522e104f628ac7718b9a35df9b';

const altogic = createClient(ENV_URL, CLIENT_KEY, {
	signInRedirect: '/login'
});

export default altogic;
