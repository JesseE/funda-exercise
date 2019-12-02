import axios from 'axios';

function getProjectData(projectId) {
	return axios.get(`http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${process.env.TOKEN}/koop/${projectId}/`,{'Access-Control-Allow-Origin':'*', 'host': window.location.host, credentials: false})
}

export { getProjectData }
