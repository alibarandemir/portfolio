'use client'
import React, { RefObject } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import toast from 'react-hot-toast';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function Form() {
    const schema = yup.object({
        firstName: yup.string().required().min(3).max(20),
        lastName: yup.string().required().max(20),
        email:yup.string().email(),
        text:yup.string().required().min(20),
        token:yup.string().required("Verify not a robot")
        
      });
      const [token, setToken] = useState<string | null>(null);
      type FormData = yup.InferType<typeof schema>;
      let data:FormData;
      const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
      });
      const recaptcha: RefObject<ReCAPTCHA> = useRef(null);
      const onSubmit = async(data: FormData) =>{ 
        console.log("onsubmit içinde")
        data.token = token || '';  // Token'ı form verilerine ekleyin
    
        console.log(data)
        const res=await fetch('/api/userForm',{
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            data
          ),

        })
        const resData= await res.json()
        if(resData.success===true){
          toast.success(resData.message)
          recaptcha?.current?.reset();
        }
        else{
          toast.error(resData.message)
        }
        
        

      };
      
      const onCaptchaChange = (token: string | null) => {
        // Set the captcha token when the user completes the reCAPTCHA
        console.log("token alıyoruz")
        try{
          if (token) {
            setToken(token)
            console.log(token)
            
          }
        }
        catch(e:any){
          console.log(e.message)
        }
        
       
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col justify-center items-center '>
    <p className='text-2xl font-bold text-secondary mb-3'>Form</p>
    <div className='flex gap-x-16'>
    <div className='flex flex-col'>
        <input {...register("firstName")} className='h-10 text-center text-lg text-primary ' placeholder='Name' />
        <p className='bg-red-600 text-gray-50'>{errors.firstName?.message}</p>

    </div>
   
        
    <div className='flex flex-col'>
      <input {...register("lastName")} placeholder='Surname' className='h-10 text-center text-lg text-primary ' />
      <p className='bg-red-600 text-gray-50'>{errors.lastName?.message}</p>

      </div>

    </div>
      
      <input {...register("email")} placeholder='email' className='w-2/3 text-primary text-center text-lg h-10 my-8' />
      <p className='bg-red-600 text-gray-50'>{errors.email?.message}</p>
      <textarea {...register("text")} placeholder='Type your opinion and suggestions' className='w-2/3 text-primary text-center text-lg h-24 resize-none my-8' rows={20}/>
      <p className='bg-red-600 text-gray-50'>{errors.text?.message}</p>
      
      
      <div className='w-full text-center mb-4'>
        <input className='w-2/3 text-center line-through ' type="email" disabled={true}  value='alibarandemir798@gmail.com' />
      </div>
      
      <div className="pb-20px">
          <ReCAPTCHA
            size="normal"
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY as string}
            onChange={onCaptchaChange}
            ref={recaptcha}
          />
          <p className='bg-red-600 text-gray-50'>{errors.token?.message}</p>
        </div>
      <button type='submit'  className=' border-secondary border-2 w-32 h-14 rounded hover:bg-secondary hover:text-primary '>Send</button>
    </form>
  )
}

export default Form