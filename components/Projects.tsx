'use client'
import React from 'react'
import CardProject from './CardProject'
import { projects } from '@/data'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

// import required modules
import { Grid, Navigation, Pagination } from 'swiper/modules';
import "../app/globals.css";
import styles from './Projects.module.css'

function Projects() {
  return (
   
    <div className='w-full h-full flex flex-col items-center'>
        <div className='mb-10'>
            <h2 className='text-secondary font-bold text-4xl'>
                Projects
            </h2>
        </div>
        
          <Swiper slidesPerView={3}
              grid={{
                rows: 1,
              }}
              spaceBetween={20}
              navigation={true}
             
              modules={[Grid, Navigation]} className={styles.customSwipper}>
          {
            projects.map((project,index)=>{
              return(
              <SwiperSlide  >
                <CardProject project={project} key={index}/>
              </SwiperSlide>)
            })
          }
          </Swiper>
        
       




    </div>
   
  )
}

export default Projects