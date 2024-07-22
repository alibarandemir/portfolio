import React from 'react'
import Image from 'next/image'
import { FaEye,FaGithub } from "react-icons/fa";
import { Button } from './ui/moving-border';
import Link from 'next/link'
interface Project{
  name:string,
  img_url:string,
  techs:Tech[],
  github_url:string,
  live_url:string

}
interface Tech {
  techName: string;
  techImage: string;
}

function CardProject({project}:{project:Project}) {
  return (
    <div id='projects' className='border-2 w-96 h-96 border-secondary flex flex-col items-center p-6'>
        {
          project.github_url!=="" ? (<><div>
          <h2 className='text-2xl font-bold'>{project.name}</h2>
      </div>
      <div className='flex flex-col w-full h-60 mb-5 relative'>
          <Image alt='' src={project.img_url} style={{position:"absolute"}} fill={true} quality='100' className=''/>
          <div id='techs' className='flex space-x-4 justify-center bg-secondary z-20 absolute bottom-0 w-full bg-opacity-65' >
              {
                project.techs.map((tech,index)=>{
                  return(
                    <div key={index}>
                      <Image alt={tech.techName} src={`${tech.techImage}`} width={40} height={40}/>
                    </div>
                  )
                })
              }
          </div>
      </div>
      <div id='buttons' className='flex'>
          <Button className='flex items-center gap-x-1 text-lg'><FaEye/><Link legacyBehavior href={project.live_url}><a target='_blank'>View</a></Link></Button>
          <Button className='flex items-center gap-x-1 text-lg'><FaGithub className='text-xl'/><Link legacyBehavior href={project.github_url}><a target='_blank'>Source Code</a></Link></Button>
      </div></>):
      (<div className='text-4xl w-full h-full text-gray-300 font-bold flex items-center justify-center bg-gradient-to-r from-violet-600 to-indigo-600'>
        <p>{project.name}</p>
          
      </div>)
        }
        



    </div>
  )
}

export default CardProject