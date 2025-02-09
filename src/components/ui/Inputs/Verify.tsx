"use client"
import React, { FormEvent, SetStateAction } from 'react'
import { instance } from '../../hook/instance'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'

interface CreateUserType {
    setIsLogin: React.Dispatch<SetStateAction<"login" | "createUser" | "resetVerify" | "resetPassword">>
}
const VerifyEmailInputs: React.FC<CreateUserType> = ({ setIsLogin }) => {

    function handleResetPassword(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = {
            email: (e.target as HTMLFormElement).email.value,
        }
        instance().post('/auth/verify-send', data).then((res) => setIsLogin("resetPassword"))
        console.log(data);
    }
    return (
        <form onSubmit={handleResetPassword} className='space-y-5' autoComplete='off'>
            <Input name='email' required size='lg' placeholder='Enter email' type='email' />
            <Button className='w-full font-semibold text-[20px] text-white' color='warning' type='submit' size='lg'>Verify Email</Button>
        </form>
    )
}

export default VerifyEmailInputs