/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Api from './axios.index';

async function getUsers(login = '', password = '') {
    try {
        const { data } = await Api.get('users', {
            params: {
                login_like: login,
                pass_like: password,
            },
        });

        return data;
    } catch (err) {
        return [];
    }
}

async function getUserById(id: string) {
    try {
        const { data } = await Api.get('users', {
            params: {
                id,
            },
        });

        return data;
    } catch (err) {
        return [];
    }
}

export { getUserById };

export default getUsers;
