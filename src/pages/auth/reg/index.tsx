/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { random } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import CitySearch from '@/components/features/city-search';
import createUser from '@/components/shared/api-queries/create-user';
import { authUser } from '@/components/shared/api-queries/get-user';
import Button, { ButtonType } from '@/components/shared/ui/button';
import ImageToBase64Converter from '@/components/shared/ui/file-upload';
import Input from '@/components/shared/ui/input';

import cn from './style.module.sass';

function Reg() {
    const { push } = useRouter();
    const { register, handleSubmit, control } = useForm();
    const [base64Image, setBase64Image] = useState('');
    const [city, setCity] = useState();

    const onSubmit = handleSubmit(async data => {
        data.id = random(1, 1000000000000, false);
        data.imgSrc = base64Image;
        data.amountOfVotes = 0;
        data.dateOfEndVoting = 'Wed Oct 18 2023 12:00:00 GMT+0300 (Москва, стандартное время)';
        data.isActive = true;
        data.sumVotesAmount = 10;
        data.city = city.value;

        await createUser(data);

        const fdata = await authUser(data.login, data.password);

        const token = fdata[0].id;

        localStorage.setItem('token', token);
        alert('Добро пожаловать');
        await push('/');
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
            <div className={cn.loginText}>Регистрация</div>
            <form className={cn.loginForm} onSubmit={onSubmit}>
                <ImageToBase64Converter base64Image={base64Image} setBase64Image={setBase64Image} />
                <div className={cn.citySearch}>
                    <CitySearch onChange={e => setCity(e)} />
                </div>
                <Controller
                    control={control}
                    name="name"
                    render={({ field }) => <Input placeholder="ФИО" {...field} />}
                />
                <Controller
                    control={control}
                    name="login"
                    render={({ field }) => <Input placeholder="Логин" {...field} />}
                />
                <Controller
                    control={control}
                    name="pass"
                    render={({ field }) => (
                        <Input placeholder="Пароль" type="password" {...field} />
                    )}
                />
                <textarea
                    className={cn.input}
                    rows={5}
                    placeholder="О себе"
                    {...register('aboutMe')}
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

export default Reg;
