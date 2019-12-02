import axios from 'axios';

function getProjectData(projectId) {
  const headerConfig = {
    headers: {
      'Access-Control-Allow-Origin':'*',
      'host': window.location.host,
      'credentials': false,
      'mode': 'no-cors'
    }
  }
	return axios.get(`https://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${process.env.TOKEN}/koop/${projectId}/`, headerConfig.headers)
}

export { getProjectData }
