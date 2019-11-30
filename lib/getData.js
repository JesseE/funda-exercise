import axios from 'axios';
require('dotenv').config()

async function getData() {
	const config = {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
		}
	};

	const token = 'ac1b0b1572524640a0ecc54de453ea9f'
	const id = '3cc5fa5b-9cd6-4361-bc42-a6ef7d2defd0'

	const request = {
		url: `/api/json/detail/${token}/koop/${id}/`,
		config
	}

	// const request = {
	// 	url: `/api/${token}/?type=koop&zo=/amsterdam/tuin/video/`,
	// 	config
	// }

	let getData = await axios.get(request.url, request.config)
		.then(res => res.data)
		.catch(err => console.error(err))

	return getData
}

export { getData }
