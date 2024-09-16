import { useState, useRef } from "react";
import {
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import footerLogo from "../../assets/Webortexlogo2.png";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [value, setValue] = useState();
  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const location = useLocation();
  const form = useRef();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (PageLink) => {
    if (PageLink.type === "section") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(PageLink.path), 100);
      } else {
        scrollToSection(PageLink.path);
      }
    } else {
      navigate(PageLink.path);
    }
  };

  const PageLinks = [
    {
      id: 1,
      name: "Services",
      path: "#services",
      type: "section",
    },
    {
      id: 2,
      name: "Projects",
      path: "#projects",
      type: "section",
    },
    {
      id: 3,
      name: "Team",
      path: "#team",
      type: "section",
    },
    {
      id: 4,
      name: "SIP",
      path: "/sip",
      type: "route",
    },
    {
      id: 5,
      name: "Contact",
      path: "#contact",
      type: "section",
    },
  ];

  const SocialLinks = [
    {
      name: "GitHub",
      source: "https://github.com/webortex-agency",
    },
    {
      name: "LinkedIn",
      source: "#",
    },
    {
      name: "Instagram",
      source: "https://www.instagram.com/webortex/",
    },
    {
      name: "Twitter",
      source: "https://x.com/webortex",
    },
  ];

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_6s2vfcv",
        "template_kd0sbol",
        form.current,
        "mWcuN68COh2Q3oyVd"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSnackbarOpen(true);
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            "2xs": 0,
            xs: 425,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            "2xl": 1536,
          },
        },
      })}
    >
      <Box className="w-full flex justify-center bg-[#292930]">
        <Container className="mx-2 md:mx-2 lg:mx-5 my-10 flex justify-around font-poppins">
          <Grid container className="flex">
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={5}
              xl={5}
              item
              className="text-headColor flex justify-center self-center"
            >
              <Box className="w-full sm:w-4/5 md:w-full bg-[#3C3C45] flex flex-col justify-around rounded-lg">
                <Box className="flex justify-center my-10">
                  <img
                    style={{ height: "auto", width: "75%" }}
                    src={footerLogo}
                    alt="Contact Image"
                  />
                </Box>
                <form ref={form} onSubmit={sendEmail}>
                  <Grid
                    item
                    className="px-[5%] xs:px-[10%] md:px-[5%] lg:px-[10%]"
                    style={{
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      className="font-poppins text-headColor text-base sm:text-xl lg:text-2xl font-semibold"
                    >
                      Contact us
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-[#d0d0d0] pt-2 font-poppins text-sm sm:text-base md:text-sm lg:text-base"
                    >
                      Industry&apos;s standard from dummy and make a type book.
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    className="px-[5%] xs:px-[10%] md:px-[5%] lg:px-[10%]"
                    style={{
                      display: "flex",
                      paddingTop: "6%",
                      paddingBottom: "5%",
                      flexDirection: "column",
                      width: "100%",
                      gap: 15,
                    }}
                  >
                    <TextField
                      type="email"
                      name="Email"
                      InputProps={{
                        style: { color: "white" },
                        sx: {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#318CE7",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#1877F2",
                          },
                        },
                      }}
                      className="bg-[#5B5B61] font-poppins rounded-lg"
                      label="Enter Your Email"
                      InputLabelProps={{
                        style: { color: "white", fontFamily: "Poppins" },
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                    />
                    <TextField
                      multiline
                      rows={4}
                      name="Message"
                      InputProps={{
                        style: { color: "white" },
                        sx: {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#318CE7",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#1877F2",
                          },
                        },
                      }}
                      className="bg-[#5B5B61] font-poppins rounded-lg"
                      label="Message"
                      InputLabelProps={{
                        style: { color: "white", fontFamily: "Poppins" },
                      }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      error={Boolean(errors.message)}
                      helperText={errors.message}
                    ></TextField>
                  </Grid>
                  <Grid
                    item
                    className="px-[5%] xs:px-[10%] md:px-[5%] lg:px-[10%]"
                    style={{
                      width: "100%",
                      paddingBottom: "10%",
                    }}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      className="h-10 sm:h-12 font-poppins text-backgroundColor bg-[#ffdd60ae] font-medium text-sm sm:text-base lg:text-lg hover:bg-[#FFDC60] rounded-lg"
                      sx={{ transition: ".4s ease" }}
                      type="submit"
                    >
                      Send
                    </Button>
                  </Grid>
                </form>
              </Box>
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={7}
              xl={7}
              item
              className="px-3 xs:px-5 sm:px-16 md:px-7 lg:px-12 my-10 flex flex-col self-center"
            >
              <Grid
                item
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid item className="flex flex-col gap-3">
                  <Typography
                    variant="h6"
                    className="font-poppins text-headColor text-base sm:text-lg md:text-base lg:text-xl font-normal"
                  >
                    <span style={{ color: "#42E052" }}>
                      <LocalPhoneOutlinedIcon />
                    </span>
                    Get in touch with
                  </Typography>
                  <Typography
                    variant="h6"
                    className="h-14 md:h-20 font-poppins text-base lg:text-xl text-headColor"
                    sx={{
                      backgroundColor: "#3C3C45",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: 2,
                    }}
                  >
                    <span> +91 9502414128 </span>
                    <span> +91 86882 81821 </span>
                  </Typography>

                  <Link
                    variant="body1"
                    className="font-poppins text-sm sm:text-base md:text-sm lg:text-base"
                    href="mailto:contact@webortex.com"
                    style={{ color: "#FFDC60" }}
                  >
                    contact@webortex.com
                  </Link>
                </Grid>

                <Grid
                  item
                  className="flex flex-col gap-3 pl-5 sm:pl-9 md:pl-5 lg:pl-14"
                >
                  <Typography
                    variant="h6"
                    style={{ color: "white" }}
                    className="font-poppins text-headColor text-base sm:text-lg md:text-base lg:text-xl font-normal"
                  >
                    <span style={{ color: "#FFDC60" }}>
                      <LocationOnOutlinedIcon />
                    </span>
                    Location
                  </Typography>
                  <Typography
                    variant="body1"
                    className="font-poppins text-sm sm:text-base md:text-sm lg:text-base"
                    style={{ color: "white" }}
                  >
                    Tirupati, Andhra Pradesh, India, 517501.
                  </Typography>
                  <Link
                    variant="body1"
                    className="font-poppins text-sm sm:text-base md:text-sm lg:text-base"
                    href="#"
                    style={{ color: "#FFDC60" }}
                  >
                    location
                  </Link>
                </Grid>
              </Grid>

              <hr className="my-12 text-[#727274]" />

              <Grid
                item
                className="flex justify-start gap-10 xs:gap-16 lg:gap-20"
              >
                <Grid item className="flex flex-col items-start">
                  <Typography
                    variant="h6"
                    className="font-poppins text-headColor text-base sm:text-lg md:text-base lg:text-xl font-normal"
                    style={{ color: "white" }}
                  >
                    <span className="pe-2" style={{ color: "#FF5449" }}>
                      <FilterNoneOutlinedIcon />
                    </span>
                    Pages
                  </Typography>
                  <Box
                    className="flex flex-col pl-8 pt-4 gap-1"
                    onChange={(e, value) => setValue(value)}
                  >
                    {PageLinks.map((PageLink, index) => (
                      <Link
                        key={index}
                        variant="body1"
                        className="font-poppins text-sm sm:text-base md:text-sm lg:text-base cursor-pointer text-headColor hover:text-textColor transition-all duration-300 ease-in-out"
                        onClick={() => handleNavigation(PageLink)}
                      >
                        {PageLink.name}
                      </Link>
                    ))}
                  </Box>
                </Grid>
                <Grid item className="flex flex-col items-start">
                  <Typography
                    variant="h6"
                    className="font-poppins text-headColor text-base sm:text-lg md:text-base lg:text-xl font-normal"
                  >
                    <span className="pe-2" style={{ color: "#42E052" }}>
                      <CampaignOutlinedIcon />
                    </span>
                    Follows
                  </Typography>
                  <Box className="flex flex-col pl-8 pt-4 gap-1">
                    {SocialLinks.map((SocialLink, index) => (
                      <Link
                        key={index}
                        variant="body1"
                        className="font-poppins text-sm sm:text-base md:text-sm lg:text-base cursor-pointer text-headColor hover:text-textColor transition-all duration-300 ease-in-out"
                        to={SocialLink.source}
                      >
                        {SocialLink.name}
                      </Link>
                    ))}
                  </Box>
                </Grid>
              </Grid>

              <hr className="mt-12 mb-7 text-[#727274]" />

              <Box>
                <Typography
                  variant="body1"
                  className="font-poppins text-center md:text-left text-[10px] sm:text-sm md:text-xs lg:text-sm text-textColor"
                >
                  Copyright © WEBORTEX | All Rights are Reserved.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
              sx={{ width: "100%" }}
            >
              Message Sent Successfully!
            </Alert>
          </Snackbar>
        </Container>
      </Box>
      <Container>
        <Box className="bg-backgroundColor py-5 text-textColor text-center">
          <Typography className="tracking-wider font-light italic">
            <span className="">Note: </span>
            Exciting Changes Ahead! | Stay tuned for the launch of our fully
            upgraded platform, coming soon!
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Footer;
