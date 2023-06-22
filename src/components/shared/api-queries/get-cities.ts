import Api from './axios.index';

export interface ICity {
    name: string;
    code: string;
    description: string;
    image: string;
}

async function getCities(likeLetters = '', codeLetters = ''): Promise<ICity[]> {
    try {
        const { data } = await Api.get<ICity[]>('city', {
            params: {
                name_like: likeLetters,
                code_like: codeLetters,
            },
        });

        return data;
    } catch (err) {
        return [];
    }
}

export default getCities;
