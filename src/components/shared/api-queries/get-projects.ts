/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Api from './axios.index';

async function getProjects(codeLetters = '', id: string) {
    try {
        const { data } = await Api.get('projects', {
            params: {
                city_like: codeLetters,
                votingDetailsId: id,
            },
        });

        return data;
    } catch (err) {
        return [];
    }
}

export default getProjects;
