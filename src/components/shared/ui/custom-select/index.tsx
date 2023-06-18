/* eslint-disable lodash/prefer-constant */
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';

import cn from './style.module.sass';

export interface IOption {
    value: string;
    label?: string;
}

function DropdownIndicator(props: DropdownIndicatorProps) {
    return (
        <components.DropdownIndicator {...props}>
            <Image src="/images/svg/search.svg" alt="Поиск" width={20} height={20} />
        </components.DropdownIndicator>
    );
}

interface ICustomSelectProps {
    options?: IOption[];
    noOptionsMessage?: string;
    onChange?: (e: unknown) => void;
}

export default function CustomSelect({
    options,
    onChange,
    noOptionsMessage = 'Пусто',
}: ICustomSelectProps) {
    return (
        <div>
            <Select
                className={clsx(cn.customSelect)}
                classNamePrefix="react-select"
                options={options}
                noOptionsMessage={() => noOptionsMessage}
                components={{ DropdownIndicator, IndicatorSeparator: () => null }}
                onChange={onChange}
            />
        </div>
    );
}
