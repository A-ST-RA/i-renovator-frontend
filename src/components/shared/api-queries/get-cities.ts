import Api from './axios.index';

export interface ICity {
    id: number;
    name: string;
    code: string;
}

async function getCities(likeLetters = ''): Promise<ICity[]> {
    const { data } = await Api.get<ICity[]>('city', {
        params: {
            name_like: likeLetters,
        },
    });

    return data;
}

export default getCities;
