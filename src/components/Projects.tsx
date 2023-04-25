import React from "react";

import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      name: "Jet-Sea",
      image: "/js-logo.png",
      description: "Website for a freight forwarding company",
    },
    {
      name: "3D Portal",
      image: "/portal.png",
      description:
        "3D portal scene with baked lighting and shaders. From ThreeJS Journey",
    },
    {
      name: "Bay Street Bets",
      image:
        "https://raw.githubusercontent.com/diavolosz/BayStreetBets/master/client/public/img/stock5.png",
      description:
        "Full stack application where users can search, buy, and sell stocks to compete with other users! Visualized data with ChartJS",
    },
    {
      name: "Pinnet Wiki Maps",
      image:
        "https://raw.githubusercontent.com/diavolosz/Pinnet/master/sampleImage/mapPinDisplay.png",
      description:
        "A full stack web map application where users can discover new places to visit! Users can share, edit, create and add locations of interest. ",
    },
  ];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0076B6]/80">
        {projects.map((project) => (
          <motion.div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.img
              src={`${project.image}`}
              initial={{
                y: -300,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="md:h-3/6 xl:h-4/6"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#0076B6]/50 ">
                  {project.name}
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#0076B6]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
