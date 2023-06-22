import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { ReactQueryKeys } from '@/components/shared/api-queries';
import getCities from '@/components/shared/api-queries/get-cities';
import CustomSelect from '@/components/shared/ui/custom-select';

function CitySearch() {
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

    return (
        <CustomSelect
            options={data}
            isLoading={isLoading}
            onInputChange={setCity}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onChange={e => push(`/projects/city/${e.value}`)}
        />
    );
}

export default CitySearch;
