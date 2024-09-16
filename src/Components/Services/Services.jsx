import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  styled,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { useNavigate } from "react-router-dom";
import serviceImg1 from "../../assets/Services/serviceImg1.webp";
import serviceImg2 from "../../assets/Services/6805599.webp";
import serviceImg3 from "../../assets/Services/paint-kit-dynamic-color.svg";
import serviceImg4 from "../../assets/Services/webdevelopment.png";
import serviceImg5 from "../../assets/Services/uiuxPrototype.webp";
import serviceImg6 from "../../assets/Services/digitalmarketing.png";
import serviceImg7 from "../../assets/Services/images.png";
import serviceImg8 from "../../assets/Services/rrr.png";

const HoverCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#292930",
  maxWidth: "300px",
  justifySelf: "center",
  borderRadius: "30px",
  flexDirection: "column",
  opacity: ".85",
  transition: "opacity .3s ease-in-out",
  border: "1px solid #424245",
  "&:hover": {
    opacity: "1",
    "& .hoverButtonText": {
      width: "auto",
      opacity: 1,
      marginLeft: "4px",
      transition: ".3s ease-in-out",
    },
    "& .cardImg": {
      opacity: 1,
      transition: ".5s ease",
    },
  },
  "& .cardImg": {
    opacity: ".35",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  whiteSpace: "nowrap",
  "& .hoverButtonText": {
    opacity: 0,
    width: 0,
    overflow: "hidden",
    transition: "opacity 0.8s ease, width 0.4s ease",
    transitionDelay: "1000ms",
  },
}));

const ColoredButton = styled(Button)(({ theme }) => ({
  background: "#ffffff",
  color: "#171717",
  "&:hover": {
    backgroundColor: "#5a56e8",
    color: "#ffffff",
    transition: ".5s ease",
    "& #buttonIcon": {
      color: "#5a56e8",
      backgroundColor: "#ffffff",
      transition: ".3s ease",
    },
  },
}));

const Services = () => {
  //   const navigate = useNavigate();

  //   const handleMoreClick01 = () => {
  //     navigate("/services/graphic-design");
  //   };

  //   const handleMoreClick02 = () => {
  //     navigate("/services/motion-graphics");
  //   };

  //   const handleMoreClick03 = () => {
  //     navigate("/services/interior-design");
  //   };

  //   const handleMoreClick04 = () => {
  //     navigate("/services/web-design");
  //   };

  //   const handleMoreClick05 = () => {
  //     navigate("/services/photography");
  //   };

  //   const handleMoreClick06 = () => {
  //     navigate("/services/digital-marketing");
  //   };

  //   const handleMoreClick07 = () => {
  //     navigate("/services/cinematography");
  //   };

  //   const handleMoreClick08 = () => {
  //     navigate("/services/3d-cinematography");
  //   };

  //   const handleOurServicesClick = () => {
  //     navigate("/contact");
  //   };

  return (
    <div className="w-full relative z-10" id="services">
      {/* <Box className="w-full mt-20 md:mt-0 h-[350px] md:h-[250px] blur-[100px] absolute z-[-99] opacity-60 rounded-full bg-gradient-to-r from-[#171717] via-[#f087ff5b] to-[#171717] "></Box> */}

      <Container maxWidth="lg" className="my-5 p-5 flex flex-col">
        <Box className="flex flex-col md:flex-row my-3 py-2 md-my-2 md:py-1">
          <div className="gap-4 md:inline-flex md:justify-start text-center md:text-left">
            <SettingsIcon
              className="bg-iconBgColor text-iconColor h-[70px] w-[70px] p-[14px] rounded-full
                  "
            />
            <div className="my-5 md:my-0">
              <Typography
                className="text-[15px] text-[#D0D0D0] font-poppins"
                sx={{ letterSpacing: "3px", textTransform: "uppercase" }}
              >
                <span className="text-[#FEC90C] mx-1"> // </span>
                01 . Services
              </Typography>
              <Typography
                variant="h4"
                className="text-2xl sm:text-3xl md:text-xl lg:text-4xl text-headColor px-5 md:px-0 text-center md:text-left w-auto md:w-[450px] lg:w-[620px] font-poppins font-normal mt-4"
              >
                Transforming Your Ideas into Powerful Digital Solutions
              </Typography>
            </div>
          </div>
          <ColoredButton
            className="text-[16px] font-poppins font-normal py-4 px-6 md:ml-auto rounded-lg gap-1 mx-auto md:mx-0 "
            sx={{
              maxWidth: "255px",
              maxHeight: "62px",
              textTransform: "capitalize",
              transition: ".3s ease-in-out",
            }}
            // onClick={handleOurServicesClick}
          >
            Our Services
            <KeyboardArrowRightTwoToneIcon
              className="bg-iconBgColor text-iconColor border-none w-[14px] h-[14px] rounded-lg p-[1px] "
              id="buttonIcon"
            />
          </ColoredButton>
        </Box>
        <Container className="my-5 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 text-headColor justify-self-center">
          {/* Card 01 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg4}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  Web Development
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  Building responsive, scalable websites tailored to your
                  business needs.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                // onClick={handleMoreClick01}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 01 */}

          {/* Card 02 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg3}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  UI/UX Design
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  Designing user-friendly interfaces that create seamless and
                  engaging experiences.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                // onClick={handleMoreClick02}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 02 */}

          {/* Card 03 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg7}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  ADs Campaign
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  Creating targeted ad campaigns that drive traffic and boost
                  conversions.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                // onClick={handleMoreClick03}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 03 */}

          {/* Card 04 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg6}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  Social Media Marketing
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  Growing your brand with strategic social media content and
                  engagement.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                // onClick={handleMoreClick04}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 04 */}

          {/* Card 05 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                alt="ServicesImg1"
                image={serviceImg1}
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  App Development
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  Developing high-performance apps that deliver a smooth user
                  experience across devices.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                // onClick={handleMoreClick05}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 05 */}

          {/* Card 06 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                alt="ServicesImg1"
                image={serviceImg8}
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  MVP Product
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  Launching a minimum viable product to quickly validate your
                  business idea.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                // onClick={handleMoreClick06}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 06 */}

          {/* Card 07 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                alt="ServicesImg1"
                image={serviceImg5}
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  UI/UX Prototype
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  Crafting interactive prototypes to visualize and test your app
                  or website’s design.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                // onClick={handleMoreClick07}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 07 */}

          {/* Card 08 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                alt="ServicesImg1"
                image={serviceImg2}
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  Search Engine Optimization
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  Optimizing your site to rank higher in search engines and
                  attract more organic traffic.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                // onClick={handleMoreClick08}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 08 */}
        </Container>
      </Container>
    </div>
  );
};

export default Services;
