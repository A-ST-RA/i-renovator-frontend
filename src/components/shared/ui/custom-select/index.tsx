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
    onChange?: (e: any) => void;
}

export default function CustomSelect({ options, onChange }: ICustomSelectProps) {
    return (
        <div>
            <Select
                className={cn.customSelect}
                options={options}
                components={{ DropdownIndicator }}
                onChange={onChange}
            />
        </div>
    );
}
