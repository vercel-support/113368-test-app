import { createClient } from 'altogic';

const ENV_URL = 'https://pn45-90sr.c1-europe.altogic.com';
const CLIENT_KEY = 'c325e652c80d4b17b4bf79fb6c0baa7e';

const altogic = createClient(ENV_URL, CLIENT_KEY, {
	signInRedirect: '/login'
});

export default altogic;
