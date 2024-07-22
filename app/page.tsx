'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { useObserver } from "@/hooks/useObserver";
import Head from "next/head";
import { useEffect, useState } from "react";


const sections= [
  "home","about","projects","contact","resume"

]
export default function Home() {

  console.log(sections)
  const [activeSection,setActiveSection]= useState("home")
  
    useObserver(sections,setActiveSection)

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNav activeSection={activeSection} navItems={navItems}/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Resume/>
    </main>
    
  );
}
