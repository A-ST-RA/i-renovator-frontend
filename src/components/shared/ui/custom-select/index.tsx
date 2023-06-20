/* eslint-disable lodash/prefer-constant */
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';

import { IOption } from './select-option';
import cn from './style.module.sass';

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
    placeholder?: string;
    onChange?: (e: unknown) => void;
    onInputChange?: (inputValue: string) => void;
    isLoading?: boolean;
}

export default function CustomSelect({
    options,
    onChange,
    onInputChange,
    noOptionsMessage = 'Пусто',
    placeholder = 'Выберете город',
    isLoading,
}: ICustomSelectProps) {
    return (
        <Select
            isLoading={isLoading}
            className={clsx(cn.customSelect)}
            classNamePrefix="react-select"
            options={options}
            placeholder={placeholder}
            noOptionsMessage={() => noOptionsMessage}
            components={{ DropdownIndicator, IndicatorSeparator: () => null }}
            onInputChange={onInputChange}
            onChange={onChange}
        />
    );
}
