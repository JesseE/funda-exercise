import axios from 'axios';
require('dotenv').config()

async function getData() {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const token = 'ac1b0b1572524640a0ecc54de453ea9f'
	const request = {
		url: `/api/${token}/?type=koop&zo=/amsterdam/tuin/video/`,
		config
	}

	let getHouseId = await axios.get(request.url, request.config)
		.then(res => getHouseId = res.data)
		.catch(err => console.error(err))

	return getHouseId
}

export { getData }
