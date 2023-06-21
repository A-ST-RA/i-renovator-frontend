// eslint-disable-next-line import/no-extraneous-dependencies
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React from 'react';

import TopAuthorCard from '@/components/entities/top-author-card';
import Button, { ButtonType } from '@/components/shared/ui/button';
import Title from '@/components/shared/ui/title';

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
        gap: '32px',
        drag: true,
        pagination: false,
        mediaQuery: 'max' as 'min' | 'max' | undefined,
        perMove: 1,
        arrows: false,
        breakpoints: {
            900: {
                arrows: true,
            },
            991: {
                gap: '16px',
            },
        },
    };

    return (
        <div className={cn.topAuthorsList}>
            <Title level={2} title="Топ авторов" customClass={cn.topAuthorsHeading} />
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
