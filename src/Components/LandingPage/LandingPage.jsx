import React from "react";
import { useMediaQuery } from "@mui/material";
import HomePage from "../HomePage/HomePage";
import Services from "../Services/Services";
import Team from "../Team/Team";
import TeamMobile from "../Team/TeamMobile";
import Projects from "../Projects/Projects";

const LandingPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <HomePage />
      <Services />
      <Projects />
      {isMobile ? <TeamMobile /> : <Team />}
    </>
  );
};

export default LandingPage;
