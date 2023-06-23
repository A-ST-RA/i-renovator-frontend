/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Api from './axios.index';

async function createUser(data: any) {
    try {
        await Api.post('users', data);
    } catch (err) {}
}

export default createUser;
