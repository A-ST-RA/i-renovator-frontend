/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Api from './axios.index';

async function createProject(data: any) {
    try {
        await Api.post('projects', data);
    } catch (err) {}
}

export default createProject;
