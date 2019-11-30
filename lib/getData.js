import axios from 'axios';
require('dotenv').config()

async function getData() {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const request = {
		url: `/api/${process.env.GET_DATA_TOKEN}/?type=koop&zo=/amsterdam/tuin/video/`,
		config
	}

	let getHouseId = await axios.get(request.url, request.config)
		.then(res => getHouseId = res.data)
		.catch(err => console.error(err))

	return getHouseId
}

export { getData }
