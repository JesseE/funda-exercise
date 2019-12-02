import axios from 'axios';

function getProjectData(projectId) {
  const config = {
    mode: 'no-cors',
		headers: {
			'Access-Control-Allow-Origin': '*',
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		withCredentials: true,
		credentials: 'same-origin',
		crossdomain: true,
  }


	return fetch(`https://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${process.env.TOKEN}/koop/${projectId}/`, config)
}

export { getProjectData }
