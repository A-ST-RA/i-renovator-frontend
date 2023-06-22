/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Api from './axios.index';

async function getProjects(codeLetters = '') {
    try {
        const { data } = await Api.get('projects', {
            params: {
                city_like: codeLetters,
            },
        });

        return data;
    } catch (err) {
        return [];
    }
}

export default getProjects;
