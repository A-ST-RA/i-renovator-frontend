/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import { ReactQueryKeys } from '@/components/shared/api-queries';
import getCities from '@/components/shared/api-queries/get-cities';
import CustomSelect from '@/components/shared/ui/custom-select';

function CitySearch() {
    const [city, setCity] = useState('');

    const { data, isLoading } = useQuery({
        queryFn: () => getCities(city),
        queryKey: [ReactQueryKeys.CITIES_LIST],
    });

    return (
        <CustomSelect
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            onInputChange={setCity}
        />
    );
}

export default CitySearch;
