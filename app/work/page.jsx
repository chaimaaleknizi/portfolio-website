"use client";

import { motion } from "framer-motion"
import React, { useState } from "react";


import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";


const projects = [
  {
    num:'01',
    category: 'Store landing page',
    title: 'project',
    description: "Reactjs  store concept",
    stack: [ {name: "Reactjs"}, {name: "Css 3"}, {name: "Javascript"} ],
    image: '/assets/work/thumb4.png',
    live: "https://store-landingpage.netlify.app/",
    github:"https://github.com/chaimaaleknizi/React-responsive-ecommerce-website-",
  },
  {
    num:'02',
    category: 'Car repair website',
    title: 'Care repair',
    description: "Auto Repair Solutions website",
    stack: [ {name: "Wordpress"}, {name: "Css 3"}, {name: "php"} ],
    image: '/assets/work/carepair.png',
    live: "https://carpa-carepair.netlify.app/",
    github:"",
  },
  {
    num:'03',
    category: 'Crypto tracker app',
    title: 'Crypto tracker app',
    description: "Cryptocurrency tracker app Next JS API Project",
    stack: [ {name: "Nextjs"}, {name: "Css 3"}, {name: "javascript"} ],
    image: '/assets/work/crypto-tracker-app.png',
    live: "https://crypto-tracker-app0.netlify.app/",
    github:"https://github.com/chaimaaleknizi/crypto-tracker-app",
  },
  {
    num:'03',
    category: 'frontend Real Estate',
    title: 'frontend Real Estate',
    description: "Streamlined Property Listings and Modern User Experience",
    stack: [ {name: "React js"}, {name: "SCSS"}, {name: "Javascript"} ],
    image: '/assets/work/thumb2.png',
    live: "https://realestate-reali.netlify.app/",
    github:"https://github.com/chaimaaleknizi/Real-estate",
  },
  {
    num:'04',
    category: 'Kids zone school ',
    title: 'website',
    description: "Kids zone school website",
    stack: [ {name: "Wordpress"}, {name: "SCSS"}, {name: "php"} ],
    image: '/assets/work/kids-zone.png',
    live: "https://kidszone-school.netlify.app/",
    github:"",
  },
  {
    num:'05',
    category: 'Suchi Restaurant website',
    title: 'Suchi Restaurant website',
    description: "A React.js Restaurant landing page",
    stack: [ {name: "React js"}, {name: "Css 3"}, {name: "Javascript"} ],
    image: '/assets/work/thumb3.png',
    live: "https://sushi-restaurant-jp.netlify.app/",
    github:"https://github.com/chaimaaleknizi/Suchi-Restaurant-website",
  },
  {
    num:'06',
    category: 'Optician website',
    title: 'Optician website',
    description: "Optician Website concept",
    stack: [ {name: "Wordpress"}, {name: "Css 3"}, {name: "php"} ],
    image: '/assets/work/optica.png',
    live: "https://optica-sunglasses.netlify.app/",
    github:"",
  },
  {
    num:'07',
    category: 'Yoga center website',
    title: 'Yoga center website',
    description: "Yoga center website",
    stack: [ {name: "Wordpress"}, {name: "Css 3"}, {name: "php"} ],
    image: '/assets/work/yoga.png',
    live: "https://yoga-zen.netlify.app/",
    github:"",
  },
  {
    num:'08',
    category: 'Ecommerce website - confidential',
    title: 'Confidential',
    description: "Woocomerce, PHP",
    stack: [ {name: "PHP"}, {name: "Css 3"}, {name: "Woocomerce"} ],
    image: '/assets/work/eco.png',
    live: " ",
    github:"",
  },
  {
   
    num:'09',
    category: 'E-commerce landing page ',
    title: 'React E-commerce Landing page',
    description: "Creating a Dynamic Online landing page with React.js",
    stack: [ {name: "React js"}, {name: "Css 3"}, {name: "Javascript"} ],
    image: '/assets/work/thumb1.png',
    live: "https://ecomerce-tech.netlify.app/" ,
    github:"https://github.com/chaimaaleknizi/ecommerce-website",
  },

];



const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index 
    const currentIndex = swiper.activeIndex;
    //update project state based on current site index 
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section 
    initial={{opacity: 0}} 
    animate={{opacity: 1, transition: {delay: 0, duration: 0.4, ease: "easeIn"},}} 
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"> 
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div  className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
               {/*project category*/}
               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
                </h2>
                {/*project description*/}
                <p className="text-white/60">{project.description}</p>
                {/*stack*/}
                <ul className="flex gap-4">
                  {project.stack.map((item, index)=>{
                    return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove the last comma*/}
                      {index !== project.stack.length - 1 && ","}
                      </li>
                  );
                  })}
                </ul>
                {/*border*/}
                <div className="border border-white/20"></div>
                {/*buttons*/}
                <div className="flex items-center gap-4">
                  {/*live project button*/}
                  <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                   {/*github project button*/}
                   <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className="xl:h-[520px mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index)=> {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image*/}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt=""/>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/*slider buttons */}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;