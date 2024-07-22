'use client'
import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useObserver  (sections:string[],setActiveSection: (id: string) => void) {
  const router = useRouter();
  
  
    
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          if (sectionId) {
            setActiveSection(sectionId);
            
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // %50 görünürlükte tetiklenir
    });
    
    sections.forEach(section => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, [ router]);
  
};


