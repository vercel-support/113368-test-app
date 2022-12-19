import { useState } from 'react';
import altogic from '../libs/altogic';

export default function Home({ data }) {
	const [users, setUsers] = useState(data);
	async function onChangeHandler(e) {
		const [file] = e.target.files;

		const { data, errors } = await altogic.storage.root.upload(file.name, file);
		console.log({ data, errors });
	}

	const clickHandler = async () => {
		const { data, errors } = await fetchUsers();
		if (errors) alert('Opps');
		else setUsers(data);
	};

	return (
		<div>
			<pre>{JSON.stringify(users, null, 2)}</pre>
			<div>
				<input onChange={onChangeHandler} type="file" />
			</div>
			<br />
			<div>
				<button onClick={clickHandler}>refresh users data</button>
			</div>
		</div>
	);
}
async function fetchUsers() {
	const { data, errors } = await altogic.db.model('users').get();
	return {
		data,
		errors
	};
}

export async function getServerSideProps() {
	const { data, errors } = await fetchUsers();
	if (!data || errors) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			data
		}
	};
}
