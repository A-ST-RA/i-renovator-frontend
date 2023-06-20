import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import { ReactQueryKeys } from '@/components/shared/api-queries';
import getCities from '@/components/shared/api-queries/get-cities';
import CustomSelect from '@/components/shared/ui/custom-select';

function CitySearch() {
    const [city, setCity] = useState('');

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

    return <CustomSelect options={data} isLoading={isLoading} onInputChange={setCity} />;
}

export default CitySearch;
