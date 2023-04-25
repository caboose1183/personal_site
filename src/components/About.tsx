import React from "react";

import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src="/linkedin.png"
        alt=""
        className="w-64 h-64 -mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-[#0076B6] underline">A little about me</h4>
        <p className="text-base">
          Wow so where do i start? I actually was a Medical Laboraotry
          Technologist for a couple years and worked in various labs around the
          GTA. The work was great and the people even greater! But as the years
          went on i began to become more interested in the software of our
          machines. I wanted to re-kindle that passion i had for coding when i
          was in high school and decided to take the plunge into web dev!
          Graduating from Lighthouse Labs i began to build up my knowledge and
          skills in Full Stack Development! Slowly building up my projects, i
          hope to one day break into the dev world and land that perfect job as
          a developer!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
