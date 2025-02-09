"use client"
import { Backpack, LikeList, Location, LoginIcon, Logo, Lupa, Mass } from '@/public/Icons/Icons'
import Link from 'next/link'
import React, { useState } from 'react'
import CategorySelect from '../ui/SelectOption'
import { useDisclosure } from '@heroui/modal'
import CustomModal from '../../components/ui/Modal/CustomModal'
import LoginInputs from '../ui/Inputs/LoginInputs'
import CreateUserInputs from '../ui/Inputs/CreateUserInput'
import { CategoryList } from '@/src/api/Category/Category'
import VerifyEmailInputs from '../ui/Inputs/Verify'

const Header = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
    const [isLogin, setIsLogin] = useState<"login" | "createUser" | "resetVerify">("login")

    return (
        <>
            <div className='px-[130px] bg-[#EBEFF3] flex items-center justify-between'>
                <ul className='flex items-center gap-[20px]'>
                    <li className='flex items-center gap-[11px]'>
                        <div><Location /></div>
                        <p className='text-[14px] leading-[16px] text-[#545D6A]'>Toshkent</p>
                    </li>
                    <li>
                        <Link href={'/about-us'} className='text-[14px] leading-[16px] text-[#545D6A]'>About Us</Link>
                    </li>
                    <li>
                        <Link href={'/about-us'} className='text-[14px] leading-[16px] text-[#545D6A]'>Products</Link>
                    </li>
                    <li>
                        <Link href={'/about-us'} className='text-[14px] leading-[16px] text-[#545D6A]'>Contacts</Link>
                    </li>
                </ul>
                <div className="flex items-center gap-[5px]">
                    <Link href={'tel:+998(71)1234567'} className='text-[14px] leading-[16px] font-semibold text-[#545D6A]'>+998 (71) 123-45-67</Link>
                    <select className='w-[60px] h-[30px] bg-[#EBEFF3]' name='Uz'>
                        <option className='text-[14px] leading-[16px] text-[#545D6A]' value="Uz">Uz</option>
                    </select>
                </div>
            </div>
            <div className="px-[130px] pt-[17px] pb-[29px] flex items-center justify-between">
                <div className="flex items-center justify-between">
                    <Link href={'/'} className='flex items-center'>
                        <div><Logo /></div>
                        <p className='text-[36px] leading-[42px] font-semibold text-[#134E9B] ml-[-10px]'>Ashyo</p>
                    </Link>
                </div>
                <div className="flex items-center gap-[10px]">
                    <CategorySelect />
                    <label className='flex items-center justify-between relative flex-row-reverse rounded-md'>
                        <input placeholder='What are you looking for?' className='w-[518px] h-[48px] bg-[#EBEFF3] rounded-l-md pl-[26px] outline-none' />
                        <button className='w-[60px] rounded-md bg-[#134E9B] py-[14px] absolute flex justify-center'><Lupa /></button>
                    </label>
                </div>
                <ul className='flex items-center gap-[15px]'>
                    <li className='cursor-pointer'><Mass /></li>
                    <li className='cursor-pointer'><LikeList /></li>
                    <li className='cursor-pointer'><Backpack /></li>
                    <button onClick={onOpen} className='cursor-pointer'><LoginIcon /></button>
                </ul>
            </div>
            <div className="pb-[29px]"><CategoryList/></div>
            <CustomModal setIsLogin={setIsLogin} isLogin={isLogin} isOpen={isOpen} onOpenChange={onOpenChange}>
                {isLogin === "login" && <LoginInputs onClose={onClose} />}
                {isLogin === "createUser" && <CreateUserInputs setIsLogin={setIsLogin} />}
                {isLogin === "resetVerify" && <VerifyEmailInputs setIsLogin={setIsLogin} />}
            </CustomModal>
        </>
    )
}

export default Header