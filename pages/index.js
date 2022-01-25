import { useRouter } from 'next/router';

import NewEventForm from '../components/events/NewEventForm';

const addEventPage = () => {
	const router = useRouter();

	async function addEventHandler(enteredEventData) {
		const response = await fetch('/api/new-event', {
			method: 'POST',
			body: JSON.stringify(enteredEventData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		router.push('/');
	}

	return <NewEventForm onAddEvent={addEventHandler} />;
};

export default addEventPage;
