import { useEffect, useState } from 'react';

import { incrementProjectById } from '../api-queries/get-projects';

function useLike(id: string) {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const likes = JSON.parse(localStorage.getItem('likes') || '[]') as string[];
        if (likes.includes(id)) {
            setIsLiked(true);
        }
    }, [id]);

    const vote = async () => {
        const likes = JSON.parse(localStorage.getItem('likes') || '[]') as string[];
        localStorage.setItem('likes', JSON.stringify([...new Set([...likes, id])]));

        await incrementProjectById(id);
        setIsLiked(true);
    };

    return { isLiked, vote };
}

export default useLike;
