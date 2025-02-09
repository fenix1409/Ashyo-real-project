"use client"
import React, { FormEvent, SetStateAction } from 'react'
import { instance } from '../../hook/instance'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'

interface CreateUserType {
    setIsLogin:React.Dispatch<SetStateAction<"login" | "createUser" | "resetVerify">>
}
const CreateUserInputs: React.FC<CreateUserType> = ({setIsLogin}) => {

    function handleCreateUser(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = {
            fullName: (e.target as HTMLFormElement).fullName.value,
            email: (e.target as HTMLFormElement).email.value,
            password: (e.target as HTMLFormElement).password.value
        }
        instance().post('/auth/sign-up', data).then((res) => setIsLogin("login"))
        console.log(data);
        
    }
    return (
        <form onSubmit={handleCreateUser} className='space-y-5' autoComplete='off'>
            <Input name='fullName' required size='lg' placeholder='Enter full name' />
            <Input name='email' required size='lg' placeholder='Enter email' type='email' />
            <Input name='password' required size='lg' placeholder='Enter password' type='password' />
            <Button className='w-full fond-semibold text-[20px] text-white' color='warning' type='submit' size='lg'>Create User</Button>
        </form>
    )
}

export default CreateUserInputs