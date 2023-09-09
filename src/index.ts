import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';

const StartServer = async () => {
	await AppDataSource.initialize();

	const app = express();
	app.use(express.json());

	app.get('/', (req, res) => {
		return res.json('tudo certo');
	});

	const port = process.env.PORT
	return app.listen(process.env.PORT, () => {

		console.log(`✨  🚀 Database started on port ================>>>> ${port} ✨`);
		console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
		console.log('')

	});
};

export default StartServer;
