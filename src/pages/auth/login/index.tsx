/* eslint-disable @typescript-eslint/no-misused-promises */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button, { ButtonType } from '@/components/shared/ui/button';
import Input from '@/components/shared/ui/input';

import cn from './style.module.sass';

function Login() {
    const { handleSubmit, control } = useForm();

    const onSubmit = handleSubmit(data => {
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
            <div className={cn.loginText}>Вход</div>
            <form className={cn.loginForm} onSubmit={onSubmit}>
                <Controller
                    control={control}
                    name="login"
                    render={({ field }) => <Input placeholder="Логин" {...field} />}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field }) => <Input placeholder="Логин" {...field} />}
                />
                <Button
                    isSubmit
                    customClass={cn.loginButton}
                    buttonType={ButtonType.Normal}
                    text="Вход"
                />
                <Link href="/auth/reg">У меня нет аккаунта</Link>
            </form>
        </div>
    );
}

export default Login;
