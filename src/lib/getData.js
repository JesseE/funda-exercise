import axios from 'axios';

function getProjectData(projectId) {
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }


	return axios.get(`https://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${process.env.TOKEN}/koop/${projectId}/`, config)
}

export { getProjectData }
