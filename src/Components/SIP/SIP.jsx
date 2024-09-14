
import WEB1 from "../../assets/About/img1.png";
import WEB2 from "../../assets/About/img2.svg";
import WEB3 from "../../assets/About/img3.png";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const AnimatedTimelineItem = TimelineItem;
const SIP = () => {
  const navigate = useNavigate();

  const handleViewServicesClick = () => {
    navigate("/contact");
  };

  const handleContactUsClick = () => {
    navigate("/contact");
  };

  const handleGetStartedClick = () => {
    navigate("/contact");
  };

  return (
    <div className="">
      <div
        className="relative h-[50vh] w-full bg-cover bg-center -mt-28"
        style={{ backgroundImage: `url(${WEB1})` }}
      >
        <nav className="flex flex-col justify-center items-center h-full">
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wide font-medium text-white z-10">
            About Us
          </h1>
          <div className="mt-3 z-10">
            <p className="font-poppins text-base md:text-base font-medium text-[#a5a3a3] text-center">
              Home /{" "}
              <span className="">
                <a href="/WE080724X001/about">About</a>
              </span>
            </p>
          </div>
        </nav>
        <div className="absolute inset-0 bg-backgroundColor bg-opacity-85"></div>
      </div>

      <Container maxWidth="lg" className="mt-5 md:mt-20">
        <div className="flex flex-wrap justify-center md:justify-between">
          <div className="w-2/3 md:w-1/2 lg:w-2/5 p-3 sm:p-2 lg:p-0 self-center">
            <img
              src={WEB2}
              alt="Why Choose 64 Framez?"
              className="rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 md:pl-14 flex flex-col justify-center self-center mt-7 md:mt-0">
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white text-center md:text-left">
              Why Choose Webortex?
            </h2>
            <div className="font-poppins text-sm md:text-base lg:text-lg font-light leading-snug text-white mt-5 text-center md:text-left px-10 md:px-0">
              <div className="mb-4">
              Webortex’s Student Incubator Program bridges the gap between academic 
              learning and real-world skills. We select talented BTech students, 
              offering one-on-one training and opportunities to work on live projects,
              ensuring they are industry-ready and well-prepared for their careers.
              </div>
              <div>
               Objective: To develop practical skills in students while contributing 
               to company growth through valuable projects.

              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:justify-start justify-center">
              <button
                className="bg-[#2D2D2D] mx-auto md:mx-0 text-white md:mr-6 text-xs sm:text-sm lg:text-base px-8 py-3 rounded-lg transform transition-all duration-500 ease-in-out hover:bg-headColor hover:text-backgroundColor"
                onClick={handleViewServicesClick}
              >
                View Services
              </button>
              <button
                className="bg-navlinkActiveColor text-headColor hover:bg-headColor hover:text-backgroundColor mt-4 md:mt-0 mx-auto md:mx-0 text-xs sm:text-sm lg:text-base px-8 py-3 rounded-lg transform transition-all duration-500 ease-in-out"
                onClick={handleContactUsClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Second WEB2 Image with text */}
        <div className="flex flex-wrap justify-center md:justify-between mt-16 md:mt-36">
          <div className="w-full md:w-1/2 lg:w-3/5 md:pr-14 flex flex-col justify-center self-center order-1 md:order-0 mt-7 md:mt-0">
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white text-center">
              Why Us?
            </h2>
            <div className="font-poppins text-sm md:text-base lg:text-lg font-light leading-snug text-white mt-5 text-center md:text-left px-10 md:px-0">
              <div className="mb-4">
              Unlike other programs, Webortex’s Student Incubator Program stands 
              out by not only offering comprehensive hands-on training and mentorship 
              but also doing so without charging a penny. In fact, we provide stipends 
              to skilled participants, ensuring that talent is rewarded, not exploited. 
              
              </div>
              <div>
              While many competitors focus on theoretical learning or charge high fees, 
              we emphasize real-world project experience, preparing students to meet industry 
              demands with practical skills. Our unique combination of personalized training, 
              real-time projects, and financial support sets us apart as a true partner in career development.
              </div>
            </div>
          </div>
          <div className="w-2/3 md:w-1/2 lg:w-2/5 p-3 sm:p-2 lg:p-0 self-center order-0 md:order-1">
            <img
              src={WEB2}
              alt="Why Us?"
              className="rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 w-full h-auto"
            />
          </div>
        </div>
<hr  style={{marginTop:100}}/>
<Container sx={{ marginBottom: 10, marginTop: 10 }}>
      <Typography variant="h4" sx={{ color: "white", display: "flex", justifyContent: "center", marginBottom: 5 }}>
        Program Phases
      </Typography>
      <Timeline position="alternate">
        <AnimatedTimelineItem
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color: "white", fontSize: "20px" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Phase 1
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: "180px" }}>
            <TimelineConnector />
            <TimelineDot
              sx={{
                color: "#5A56E8",
                height: "70px",
                width: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReceiptLongIcon sx={{ height: "40px", width: "40px" }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, color: "white" }}>
            <Typography sx={{ color: "white", fontSize: "28px", marginTop: 7 }}>
              Application & Selection
            </Typography>
          </TimelineContent>
        </AnimatedTimelineItem>
        <AnimatedTimelineItem
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color: "white", fontSize: "20px" }}
            variant="body2"
            color="text.secondary"
          >
            Phase 2
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: "180px" }}>
            <TimelineConnector />
            <TimelineDot
              sx={{
                color: "primary",
                height: "70px",
                width: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SupervisorAccountIcon sx={{ height: "40px", width: "40px" }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, color: "white" }}>
            <Typography sx={{ color: "white", fontSize: "28px", marginTop: 7 }}>
              One-on-One Training
            </Typography>
          </TimelineContent>
        </AnimatedTimelineItem>
        <AnimatedTimelineItem
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color: "white", fontSize: "20px" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Phase 3
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: "180px" }}>
            <TimelineConnector />
            <TimelineDot
              sx={{
                color: "#7F00FFB3",
                height: "70px",
                width: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AccountTreeIcon sx={{ height: "40px", width: "40px" }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography sx={{ color: "white", fontSize: "28px", marginTop: 7 }}>
              Real-time Projects
            </Typography>
          </TimelineContent>
        </AnimatedTimelineItem>
        <AnimatedTimelineItem
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color: "white", fontSize: "20px" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Phase 4
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: "180px" }}>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot
              sx={{
                color: "#5A56E8",
                height: "70px",
                width: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IntegrationInstructionsIcon sx={{ height: "40px", width: "40px" }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography sx={{ color: "white", fontSize: "28px", marginTop: 7 }}>
              Project Evaluation & Integration
            </Typography>
          </TimelineContent>
        </AnimatedTimelineItem>
        <AnimatedTimelineItem
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color: "white", fontSize: "20px" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Phase 5
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: "180px" }}>
            <TimelineConnector />
            <TimelineDot
              sx={{
                color: "primary",
                height: "70px",
                width: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PlaylistAddCheckCircleIcon sx={{ height: "40px", width: "40px" }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography sx={{ color: "white", fontSize: "28px", marginTop: 7 }}>
              Peer Mentorship Process
            </Typography>
          </TimelineContent>
        </AnimatedTimelineItem>
        <AnimatedTimelineItem
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color: "white", fontSize: "20px" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Phase 6
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: "180px" }}>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot
              sx={{
                color: "#7F00FFB3",
                height: "70px",
                width: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FeedbackIcon sx={{ height: "40px", width: "40px" }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography sx={{ color: "white", fontSize: "28px", marginTop: 7 }}>
              Feedback & Certification
            </Typography>
          </TimelineContent>
        </AnimatedTimelineItem>
      </Timeline>
    </Container>
  <hr/>
        <div
          className="relative h-[45vh] w-full bg-cover bg-center rounded-[18px] my-16 md:my-24"
          style={{ backgroundImage: `url(${WEB3})` }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center z-10">
              <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl font-light mb-6 md:mb-7 lg:mb-8 text-white">
                Hire Us Now
              </h2>
              <div className="font-poppins text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-7 lg:mb-8 tracking-wide font-medium leading-tight text-white mt-4">
                We Are Always Ready To
                <div className="font-poppins text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-wide font-medium leading-tight text-white mt-4">
                  Take A Perfect Choice
                </div>
              </div>
              <button
                className="bg-white text-backgroundColor px-12 py-3 rounded-lg transform transition-all duration-500 ease-in-out hover:bg-navlinkActiveColor hover:text-headColor"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-backgroundColor bg-opacity-65"></div>
        </div>
      </Container>
    </div>
  );
};

export default SIP;
