import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  styled,
} from "@mui/material";
import coverImg from "../../assets/edited.gif";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

const CustomButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  whiteSpace: "nowrap",
  transition: "width 0.4s ease, background-color 0.5s ease, color 0.4s ease",
  width: "140px",
  "& #buttonText": {
    opacity: 0,
    width: 0,
    overflow: "hidden",
    transition: "opacity 0.4s ease, width 0.5s ease",
  },
  "&:hover": {
    width: "220px",
    backgroundColor: "transparent",
    transition: ".3s ease, width .5s ease",
    "& #buttonText": {
      opacity: 1,
      width: "auto",
    },
  },
}));

const HomePage = () => {
  const navigate = useNavigate();

  const handleLetsTalkClick = () => {
    navigate("/contact");
  };

  const handleGetStartedClick = () => {
    navigate("/contact");
  };

  return (
    <div className="m-0 p-0" id="home">
      <Box className="flex justify-center">
        <Container
          maxWidth="lg"
          className="self-center mt-0 md:my-10 lg:my-8 pt-0 pb-5 xs:py-10 md:pt-0 md:pb-0 lg:py-10 xl:my-44"
        >
          <Box className="">
            <div className="flex md:flex-row flex-col-reverse justify-center gap-0 xs:gap-2 md:gap-4 px-10">
              <div className="grid-rows-12 md:grid-rows-6 self-center px-1 xs:px-2 md:px-3">
                <Typography
                  variant="h2"
                  className="font-poppins text-headColor text-center md:text-left text-3xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-7xl md:pe-36  font-light"
                >
                  Design. Develop. Dominate.
                </Typography>
                <Typography
                  variant="h6"
                  className="font-poppins text-textColor text-center md:text-left text-[11px] xs:text-sm sm:text-base lg:text-lg mt-3 md:mt-4 lg:mt-7 font-normal"
                >
                  Crafting Digital Experiences
                  <br />
                  that Connect and Convert
                </Typography>
                <div className="flex flex-col md:flex-row my-5 lg:my-8 gap-3 md:gap-4 lg:gap-5 ">
                  <Button
                    variant="contained"
                    className="text-buttonTextColor bg-buttonBgColor py-1 px-4 sm:py-2 sm:px-6 md:py-3 md:px-8  hover:bg-navlinkActiveColor  rounded-lg font-semibold h-12 mx-auto md:mx-0 text-sm md:text-xs lg:text-sm"
                    sx={{ transition: ".4s ease-in-out" }}
                    onClick={handleLetsTalkClick}
                  >
                    Let's Talk
                  </Button>

                  <CustomButton
                    variant="text"
                    className="font-poppins text-iconColor self-center py-1  sm:py-2  md:py-3 hover:text-headColor hover:bg-transparent font-semibold h-12 mx-auto md:mx-0 text-sm md:text-xs lg:text-sm"
                    onClick={handleGetStartedClick}
                  >
                    <span id="buttonText">Get Started</span>
                    <EastIcon
                      className="ml-1 md:ml-2 text-3xl"
                      sx={{ transition: ".5s ease-in-out" }}
                      id="buttonIcon"
                    />
                  </CustomButton>
                </div>
              </div>
              <div className="grid-rows-12 md:grid-rows-6 text-center px-3 pt-6 sm:pt-6 md:pt-0">
                <Avatar
                  alt="64 FRAMEZ"
                  src={coverImg}
                  className="w-full h-full sm:scale-100 md:scale-[125%] lg:scale-[130%] xl:scale-[150%]"
                ></Avatar>
                {/* <Box className="w-[156px] sm:w-[464px] md:w-[664px] lg:w-full  h-[586px] md:h-[362px] lg:h-[542px] lg:max-h-full top-0 md:left-[100px] lg:left-0 blur-[90px] 2xl:blur-[150px] absolute z-[-99] opacity-80 2xl:bg-opacity-55 rounded-full bg-gradient-to-r from-backgroundColor from-10%  via-[#f087ff5b] via-85% to-backgroundColor to-10%"></Box> */}
              </div>
            </div>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default HomePage;
