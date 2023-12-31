import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import GithubCalendarPage from "./GithubCalendarPage";

export const Stats = () => {
  return (
    <Box id="statistics">
      <Heading
        data-aos="fade-up"
        mt={"6%"}
        textAlign={"center"}
        fontSize={["2xl", "3xl", "4xl", "4xl"]}
      >
        {" "}
        Github <span style={{ color: "#0984e3" }}>Calender</span>
      </Heading>
      <GithubCalendarPage />
      <Heading
        data-aos="fade-up"
        data-aos-duration="1000"
        textAlign={"center"}
        mt={"6%"}
        fontSize={["2xl", "3xl", "4xl", "4xl"]}
      >
        {" "}
        Github <span style={{ color: "#0984e3" }}>stats</span>
      </Heading>
      <Box className="stat-container">
        <Box className="statone" data-aos="fade-up">
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=abuzar-shaikh&theme=transparent&hide_border=true&include_all_commits=false&count_private=false"
            alt="GitHub Stats"
          />
        </Box>
        <Box className="stattwo" data-aos="fade-up" data-aos-duration="1000">
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=abuzar-shaikh&theme=transparent&hide_border=true"
            alt="GitHub Streak Stats"
          />
        </Box>
        <Box className="statthree" data-aos="fade-up" data-aos-duration="1000">
          {" "}
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=abuzar-shaikh&theme=transparent&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
            alt="GitHub Top Languages"
          />
        </Box>
      </Box>
    </Box>
  );
};
