/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { random } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import CitySearch from '@/components/features/city-search';
import createProject from '@/components/shared/api-queries/create-project';
import { getUserById } from '@/components/shared/api-queries/get-user';
import Button, { ButtonType } from '@/components/shared/ui/button';
import ImageToBase64Converter from '@/components/shared/ui/file-upload';
import Input from '@/components/shared/ui/input';

import cn from './style.module.sass';

function Create() {
    const { register, handleSubmit, control } = useForm();
    const [base64Image, setBase64Image] = useState('');
    const [city, setCity] = useState();

    const onSubmit = handleSubmit(async data => {
        data.id = random(1, 1000000000000, false);
        data.votingImage = base64Image;
        data.amountOfVotes = 0;
        data.dateOfEndVoting = 'Wed Oct 18 2023 12:00:00 GMT+0300 (Москва, стандартное время)';
        data.isActive = true;
        data.votingDetailsId = data.id;
        data.city = city.label;

        const tokenData = localStorage.getItem('token') || '';

        const user = await getUserById(tokenData);
        data.creator = user[0];

        console.log(data);
        await createProject(data);
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
                <textarea
                    className={cn.input}
                    rows={5}
                    placeholder="Описание проекта"
                    {...register('desctiption')}
                />
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
