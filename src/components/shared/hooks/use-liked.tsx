import { useEffect, useState } from 'react';

function useLike(id: string) {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const likes = JSON.parse(localStorage.getItem('likes') || '[]') as string[];
        if (likes.includes(id)) {
            setIsLiked(true);
        }
    }, [id]);

    const vote = () => {
        const likes = JSON.parse(localStorage.getItem('likes') || '[]') as string[];
        localStorage.setItem('likes', JSON.stringify([...new Set([...likes, id])]));
        setIsLiked(true);
    };

    return { isLiked, vote };
}

export default useLike;
