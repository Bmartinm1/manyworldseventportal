import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;

		const { title, image, description, id } = data;

		const client = await MongoClient.connect(
			'mongodb+srv://ben_m_squared:Thetrinity1@cluster0.fwv4v.mongodb.net/eventsDatabase?retryWrites=true&w=majority'
		);
		const db = client.db();

		const eventsCollection = db.collection('events');

		const result = await eventsCollection.insertOne(data);

		client.close();

		res.status(201).json({ message: 'Event successfully added!' });
	}
}

export default handler;
