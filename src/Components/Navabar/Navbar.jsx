import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  createTheme,
  Container,
  styled,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from "../../assets/Webortexlogo.png";
import DrawerComp from "./DrawerComp";

const CustomTabs = styled(Tabs)(({ theme }) => ({
  "& .css-1aquho2-MuiTabs-indicator": {
    backgroundColor: "#5A56E8",
  },
}));

const Navbar = () => {
  const [value, setValue] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const theme = createTheme({
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
  });

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (navbarLink) => {
    if (navbarLink.type === "section") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(navbarLink.path), 100);
      } else {
        scrollToSection(navbarLink.path);
      }
    } else {
      navigate(navbarLink.path);
    }
  };

  const navbarClasses = `
    ${
      isScrolled
        ? "md:fixed md:left-auto md:right-auto md:px-0 md:mx-0 py-2 md:bg-[#292930] shadow-none md:rounded-full scroll-smooth"
        : "bg-transparent"
    }
    transition-all duration-300 ease-in-out
  `;

  const handleLetsTalkClick = () => {
    navigate("/contact");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navbarLinks = [
    {
      id: 1,
      pageName: "Services",
      path: "#services",
      type: "section",
    },
    {
      id: 2,
      pageName: "Projects",
      path: "#projects",
      type: "section",
    },
    {
      id: 3,
      pageName: "SIP",
      path: "/sip",
      type: "route",
    },
  ];

  return (
    <Container
      maxWidth="lg"
      className="md:flex md:justify-center relative z-30 md:z-999"
    >
      <div className="mt-3 md:mt-5 pt-2 md:flex md:justify-center">
        <div className={navbarClasses} style={{ zIndex: 999 }}>
          <Toolbar className="align-middle mx-7">
            <Link to="/" className="mr-12">
              <Avatar
                alt="64 FRAMEZ"
                src={logoImg}
                className="rounded-none w-[30%] h-auto"
                onClick={scrollToTop}
              />
            </Link>
            {isMatch ? (
              <DrawerComp />
            ) : (
              <>
                <CustomTabs
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  className="ml-0 md:ml-auto h-12 mx-0 md:mx-5 lg:mx-4"
                >
                  {navbarLinks.map((navbarLink) => (
                    <Tab
                      key={`Link ${navbarLink.id}`}
                      label={
                        <span
                          onClick={() => handleNavigation(navbarLink)}
                          className="text-textColor font-poppins text-xs lg:text-sm mx-0 cursor-pointer hover:text-headColor transition-all duration-300 ease-in-out"
                        >
                          {navbarLink.pageName}
                        </span>
                      }
                    />
                  ))}
                </CustomTabs>

                <Button
                  variant="contained"
                  className="text-buttonTextColor bg-buttonBgColor py-1 px-4 sm:py-2 sm:px-6 md:py-3 md:px-6 hover:bg-navlinkActiveColor  rounded-lg font-semibold h-10 mx-auto md:mx-0 text-sm md:text-xs lg:text-sm text-nowrap"
                  sx={{ transition: ".3s ease-in-out" }}
                  onClick={handleLetsTalkClick}
                >
                  Let's Talk
                </Button>
              </>
            )}
          </Toolbar>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
