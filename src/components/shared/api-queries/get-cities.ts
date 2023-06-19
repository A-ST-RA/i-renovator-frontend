import Api from './axios.index';

async function getCities(likeLetters = '') {
    return Api.get('cities', {
        params: {
            like: likeLetters,
        },
    });
}

export default getCities;
