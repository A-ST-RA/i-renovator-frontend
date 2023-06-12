// eslint-disable-next-line import/no-extraneous-dependencies
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React from 'react';

import TopAuthorCard from '@/components/entities/top-author-card';
import Button, { ButtonType } from '@/components/shared/ui/button';

import cn from './style.module.sass';

interface ITopAuthorsListProps {
    authors: {
        imgSrc: string;
        name: string;
        id: string;
        sumVotesAmount: number;
    }[];
}

export default function TopAuthorsList({ authors }: ITopAuthorsListProps) {
    const splideOptions = {
        // arrows: false,
        gap: '32px',
        drag: true,
        pagination: false,
        perMove: 1,
        updateOnMove: false,
        perPage: 2,
        autoScroll: {
            speed: 2,
        },
    };

    return (
        <div className={cn.topAuthorsList}>
            <Splide hasTrack={false} options={splideOptions}>
                <SplideTrack>
                    {authors.map((el, index) => (
                        <SplideSlide key={el.id}>
                            <TopAuthorCard rankPlace={index + 1} author={el} />
                        </SplideSlide>
                    ))}
                </SplideTrack>
                <div className="splide__arrows">
                    <Button
                        buttonType={ButtonType.WhiteSpace}
                        icon="/images/svg/arrow.svg"
                        customClass="splide__arrow splide__arrow--prev"
                    />
                    <Button
                        buttonType={ButtonType.Circled}
                        icon="/images/svg/arrow.svg"
                        customClass="splide__arrow splide__arrow--next"
                    />
                </div>
            </Splide>
        </div>
    );
}
