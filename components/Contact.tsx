import React from 'react'
import { FaGithub, FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import Form from './Form';

function Contact() {
  return (
    <div id='contact' className='mt-8 w-full h-full flex flex-col items-center justify-center'>
        
        <div className='text-gray-100 font-bold text-4xl mb-10'>
            Contact

        </div>
        <div className='flex w-full h-full justify-between gap-x-4'>
            <div className='ml-16 flex-grow-0'>
                <p className='text-lg mb-3'>one step away from becoming friends!</p>
                <div className='flex flex-wrap w-3/4 justify-center'>
                    <div className='rounded w-24 h-24 border-2 border-secondary  mb-8 mr-9 '>
                        <Link href='https://github.com/alibarandemir' legacyBehavior className='w-full h-full' >
                            <a target='_blank' className=' w-full h-full flex flex-col items-center justify-center hover:bg-secondary hover:text-primary'>
                                <FaGithub className='text-4xl mb-2'/>
                                <p>Github</p>
                            </a>
                   
                        </Link>
                    </div>
                    <div className='rounded w-24 h-24 border-2 border-secondary '>
                        <Link href='https://www.linkedin.com/in/ali-baran-demir-55b0181b4/' legacyBehavior className='w-full h-full' >
                            <a target='_blank' className=' w-full h-full flex flex-col items-center justify-center hover:bg-secondary hover:text-primary'>
                                <FaLinkedin className='text-4xl mb-2'/>
                                <p>LinkedIn</p>
                            </a>
                   
                        </Link>
                    </div>
                    <div className='rounded w-24 h-24 border-2 border-secondary mr-9 '>
                        <Link href='https://medium.com/@alibarandemir798' legacyBehavior className='w-full h-full' >
                            <a target='_blank' className=' w-full h-full flex flex-col items-center justify-center hover:bg-secondary hover:text-primary'>
                                <FaMedium className='text-4xl mb-2 '/>
                                <p>Medium</p>
                            </a>
                   
                        </Link>
                    </div>
                    <div className='rounded w-24 h-24 border-2 border-secondary '>
                        <Link href='https://github.com/alibarandemir' legacyBehavior className='w-full h-full' >
                            <a target='_blank' className=' w-full h-full flex flex-col items-center justify-center hover:bg-secondary hover:text-primary'>
                                <FaGithub className='text-4xl mb-2'/>
                                <p>Github</p>
                            </a>
                   
                        </Link>
                    </div>
                    
                   
                </div>
            </div>
            <div className='flex-grow'>
               
                <Form/>
            </div>
        </div>
        




    </div>
  )
}

export default Contact