/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { ReactQueryKeys } from '@/components/shared/api-queries';
import getCities from '@/components/shared/api-queries/get-cities';
import CustomSelect from '@/components/shared/ui/custom-select';

interface ICitySearchParams {
    onChange?: (e: any) => void;
}

function CitySearch({ onChange }: ICitySearchParams) {
    const [city, setCity] = useState('');
    const { push } = useRouter();

    const { data = [], isLoading } = useQuery({
        queryFn: () => getCities(city),
        queryKey: [ReactQueryKeys.CITIES_LIST, city],
        staleTime: 3000,
        select: data =>
            data.map(el => ({
                label: el.name,
                value: el.code,
            })),
    });

    const thisOnChange =
        onChange !== undefined
            ? onChange
            : (e: { value: any }) => push(`/projects/city/${e.value}`);

    return (
        <CustomSelect
            options={data}
            isLoading={isLoading}
            onInputChange={setCity}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onChange={thisOnChange}
        />
    );
}

export default CitySearch;
