"use client"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import cogImage from "@/assets/cog.png"
import cylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"
import React, {useRef} from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"


export default function Hero() {
  const heroRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  useMotionValueEvent(translateY, 'change', (latestValue) => console.log(latestValue));
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip">
        <div className="container">
            <div className='md:flex items-center'>
                <div className="md:w-[478px] py-3 px-5">
                  <div className="tag">Version 2.o is here</div>
                  <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-orange-700 to-orange-500 text-transparent bg-clip-text mt-6'>Pathway to productivity</h1>
                  <p className='text-xl  text-[#010D3E] tracking-tight mt-6'>Celebrate the joy of accomplishment with an app designed to tract your progress, motivate your efforts and celebrate your success.</p>
                  <div className='flex gap-1 items-center mt-[30px]'>
                      <Button>Get For Free</Button>
                      <Button variant='secondary' className='gap-1'>
                        <span>Learn more</span>
                        <ArrowRight className='h-5 w-5' />
                      </Button>
                  </div>
                </div>
                <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
                  <motion.img src={cogImage.src} alt="cog Image" 
                    className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                    animate={{translateY: [-30, 30]}}
                    transition={{repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut", }}

                  />

                  <motion.img src={cylinderImage.src} width={220} height={220} alt="cylinder Image" 
                    className="hidden md:block -top-8 -left-32 md:absolute"
                    style={{ translateY: translateY,}}
                  />
                  <motion.img src={noodleImage.src} width={220} alt="noodle Image" 
                    className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
                    style={{ 
                      rotate: 30,
                      translateY: translateY,
                    }}
                  />
                </div>
            </div>
            
        </div>
    </section>
  )
}
