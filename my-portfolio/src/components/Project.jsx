import { Box, Text } from "@chakra-ui/react";
import React from "react";
import mbayalang from "./images/mbayalang.png";
import Trivago from "./images/Trivago.png";
import overstack from "./images/overstack.png";
import portfolio from "./images/portfolio.png";

import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <Box id="projects">
      <Text
        data-aos="fade-up"
        data-aos-duration="1000"
        fontSize={["3xl", "4xl", "4xl", "4xl"]}
        mb={"30px"}
        color={"#0984e3"}
        fontWeight={"700"}
        className="project-title"
        textAlign={"center"}
        border={"1px solid"}
        w={"max-content"}
        margin={"40px auto"}
        padding={"0px 40px"}
      >
        Projects
      </Text>

      <Box className="project_main">
        <ProjectCard
          tech=" React | CSS | HTML | JavaScript | JSON | Vercel | Charkra UI"
          github="https://github.com/abuzar-shaikh/Mbalayang.com-Clone.git"
          link="https://mbalayang-theta.vercel.app/"
          avatar={mbayalang}
          name="MBALAYANG.com clone"
          desc=" An Online Platform to book Hotels and Get Information About
                    It."
        />
        <ProjectCard
          tech="  CSS | HTML | JavaScript | JSON | Netlify"
          github="https://github.com/abuzar-shaikh/Trivago.com-Clone"
          link="https://astounding-brigadeiros-743905.netlify.app/"
          avatar={Trivago}
          name="Trivago.com clone"
          desc="An Online Platform to Book Hotels of Different Destination."
        />
        <ProjectCard
          tech="  CSS | HTML | JavaScript | JSON | Netlify"
          link="https://64b9658ad097dc06e782227c--sparkling-sprinkles-e83f71.netlify.app/"
          github="https://github.com/abuzar-shaikh/Overstock.com-Clone"
          avatar={overstack}
          name="Overstock.com clone"
          desc="An Online Platform to Get All Kinds of Furniture Products."
        />
        <ProjectCard
          tech="   React | CSS | HTML | JavaScript | JSON | Vercel | Charkra UI "
          github="https://github.com/skabusaeed1/skabusaeed1.github.io"
          link="https://skabusaeed1.github.io/"
          avatar={portfolio}
          name="Portfolio"
          desc="A website where prospect recruiter can see the details
                    about the person."
        />
      </Box>
    </Box>
  );
};
