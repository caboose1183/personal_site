import React from "react";

import { motion } from "framer-motion";

import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  const skills = [
    {
      name: "JavaScript",
      image:
        "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png",
      progression: "70%",
    },
    {
      name: "React",
      image: "https://logowik.com/content/uploads/images/react.jpg",
      progression: "70%",
    },
    {
      name: "HTML",
      image:
        "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
      progression: "90%",
    },
    {
      name: "CSS",
      image:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
      progression: "50%",
    },
    {
      name: "NodeJS",
      image:
        "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
      progression: "60%",
    },
    {
      name: "Typescript",
      image:
        "https://www.typescripttutorial.net/wp-content/uploads/2020/04/favicon.png",
      progression: "50%",
    },
    {
      name: "PostgreSQL",
      image: "https://logowik.com/content/uploads/images/postgresql6815.jpg",
      progression: "75%",
    },
    {
      name: "Material UI",
      image: "https://mui.com/static/logo.png",
      progression: "80%",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
      progression: "60%",
    },
    {
      name: "Bootstrap",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      progression: "60%",
    },
    {
      name: "NextJS",
      image:
        "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
      progression: "60%",
    },
    {
      name: "ThreeJS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1200px-Three.js_Icon.svg.png",
      progression: "60%",
    },
    {
      name: "MongoDB",
      image:
        "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png",
      progression: "40%",
    },
    {
      name: "Blender",
      image:
        "https://w7.pngwing.com/pngs/414/62/png-transparent-blender-hd-logo-thumbnail.png",
      progression: "45%",
    },
    {
      name: "Vite",
      image: "https://vitejs.dev/logo-with-shadow.png",
      progression: "65%",
    },
    {
      name: "Git",
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      progression: "65%",
    },
  ];

  return (
    <motion.div
      className=" flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500  text-sm">
        Hover over a skill to see my skill progression!
      </h3>

      <div className="grid grid-cols-4 gap-5 ">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill
            key={skill.name}
            image={skill.image}
            progression={skill.progression}
          />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill
            key={skill.name}
            image={skill.image}
            progression={skill.progression}
            directionLeft
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
