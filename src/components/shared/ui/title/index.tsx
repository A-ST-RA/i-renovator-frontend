/* eslint-disable xss/no-mixed-html */
import clsx from 'clsx';
import React from 'react';

import cn from './styles.module.sass';

export interface ITitleProps {
    title: string;
    // eslint-disable-next-line no-magic-numbers
    level: 1 | 2 | 3 | 4 | 5 | 6;
    customClass?: string;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

function Title({ title, level = 1, customClass }: ITitleProps) {
    const Tag = `h${level}` as HeadingTag;

    return (
        <Tag className={clsx(cn[Tag], customClass)} dangerouslySetInnerHTML={{ __html: title }} />
    );
}

export default Title;
