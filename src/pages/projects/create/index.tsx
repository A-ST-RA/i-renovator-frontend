/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { uniqueId } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import CitySearch from '@/components/features/city-search';
import Button, { ButtonType } from '@/components/shared/ui/button';
import ImageToBase64Converter from '@/components/shared/ui/file-upload';
import Input from '@/components/shared/ui/input';

import cn from './style.module.sass';

function Create() {
    const { handleSubmit, control } = useForm();
    const [base64Image, setBase64Image] = useState('');
    const [city, setCity] = useState();

    const onSubmit = handleSubmit(data => {
        data.votingImage = base64Image;
        data.amountOfVotes = 0;
        data.dateOfEndVoting = 'Wed Oct 18 2023 12:00:00 GMT+0300 (Москва, стандартное время)';
        data.isActive = true;
        data.votingDetailsName = uniqueId('project_');
        data.city = city.label;

        console.log(data);
    });

    return (
        <div className={cn.login}>
            <Link href="/">
                <Image
                    className={cn.logo}
                    src="/images/svg/i-renovator-logo.svg"
                    alt="Я реноватор Лого"
                    width={153}
                    height={45}
                />
            </Link>
            <div className={cn.loginText}>Создание проекта</div>
            <form className={cn.loginForm} onSubmit={onSubmit}>
                <ImageToBase64Converter base64Image={base64Image} setBase64Image={setBase64Image} />
                <div className={cn.citySearch}>
                    <CitySearch onChange={e => setCity(e)} />
                </div>
                <Controller
                    control={control}
                    name="votingDetailsName"
                    render={({ field }) => <Input placeholder="Название проекта" {...field} />}
                />
                <Controller
                    control={control}
                    name="description"
                    render={({ field }) => <Input placeholder="Логин" {...field} />}
                />
                <textarea className={cn.input} rows={5} placeholder="Описание проекта" />
                <Button
                    isSubmit
                    customClass={cn.loginButton}
                    buttonType={ButtonType.Normal}
                    text="Создать"
                />
            </form>
        </div>
    );
}

export default Create;
