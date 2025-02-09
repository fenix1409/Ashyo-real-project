"use client"
import React, { FormEvent, useContext } from 'react'
import { Context } from '../../context/Context'
import { instance } from '../../hook/instance'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'


interface LoginType {
  onClose:() => any
}
const LoginInputs:React.FC<LoginType> = ({onClose}) => {
  const { setAccessToken } = useContext(Context)

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = {
      email: (e.target as HTMLFormElement).email.value,
      password: (e.target as HTMLFormElement).password.value
    }
    instance().post(`/auth/sign-in`, data).then(res => {
      setAccessToken(res.data.access_token)
      onClose()
    console.log(res.data.access_token);
    
    })

  }
  return (
    <form onSubmit={handleLogin} className='space-y-5' autoComplete='off'>
      <Input name='email' required size='lg' placeholder='Enter your email' type='email' />
      <Input name='password' required size='lg' placeholder='Enter password' type='password' />
      <Button className='w-full fond-semibold text-[20px] text-white' color='warning' type='submit' size='lg'>Login</Button>
    </form>
  )
}

export default LoginInputs