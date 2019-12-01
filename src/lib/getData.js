import axios from 'axios';

function getProjectData(projectId) {
	return axios.get(`/api/json/detail/${process.env.TOKEN}/koop/${projectId}/`)
}

export { getProjectData }
