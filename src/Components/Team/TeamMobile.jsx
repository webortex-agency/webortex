import "./styles.css";
import { motion } from "framer-motion";
import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import { Handshake } from "@mui/icons-material";
import Insta from "../../assets/Social/instagram.png";
import x from "../../assets/Social/twitter.png";
import github from "../../assets/Social/github.png";
import linkedin from "../../assets/Social/linkedin.png";
import TeamImg2 from "../../assets/TeamMembers/sisi.jpg";
import TeamImg1 from "../../assets/TeamMembers/gnana.jpg";
import TeamImg3 from "../../assets/TeamMembers/tharun.jpg";
import TeamImg4 from "../../assets/TeamMembers/jaydeep.jpg";
import TeamImg5 from "../../assets/TeamMembers/sandeep.jpg";
import TeamImg6 from "../../assets/TeamMembers/rishitha.jpg";
import TeamImg7 from "../../assets/TeamMembers/revanth.jpg";
import TeamImg8 from "../../assets/TeamMembers/yusuf.jpg";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TeamMobile = () => {
  return (
    <div style={{ marginBottom: "150px" }}>
      <Grid container className="flex flex-col items-center">
        <Handshake
          sx={{ fontSize: 35 }}
          className="bg-iconBgColor text-iconColor h-[70px] w-[70px] p-[14px] rounded-full "
        />
        <div className="my-5 text-center">
          <Typography
            className="text-[15px] text-[#D0D0D0] font-poppins"
            sx={{ letterSpacing: "3px", textTransform: "uppercase" }}
          >
            <span className="text-[#5956E8] mx-1">//</span>
            05 . Our Team
          </Typography>
          <Typography
            variant="h4"
            className="text-2xl sm:text-3xl md:text-xl lg:text-4xl text-headColor px-5 md:px-0 text-center font-poppins font-normal mt-4"
          >
            Meet Our Team Experts
          </Typography>
        </div>
      </Grid>

      {/* Team Member 1 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(340, 100%, 50%), hsl(10, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={TeamImg1}
              alt="team-mem-1"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                S Gnana Sekhar
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Founder
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://github.com/gnanaofficial">
                  <img src={github} alt="GitHub" width={23}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.linkedin.com/in/gnana-sekhar-2b942b29b">
                  <img src={linkedin} alt="LinkedIn" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.instagram.com/gnanaofficial">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://x.com/gnanaofficial">
                  <img src={x} alt="twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 2 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(20, 100%, 50%), hsl(40, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={TeamImg2}
              alt="team-mem-2"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                Sisindri Singamsetti
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Co-Founder
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://github.com/sisi-tarak">
                  <img src={github} alt="GitHub" width={23}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.linkedin.com/in/sisitarak">
                  <img src={linkedin} alt="LinkedIn" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.instagram.com/sisi_tarakk/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://x.com/sisi_tarak">
                  <img src={x} alt="twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 3 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(60, 100%, 50%), hsl(90, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={TeamImg3}
              alt="team-mem-3"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                A Tharun
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Creative Director
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://github.com/Maritot">
                  <img src={github} alt="GitHub" width={23}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.linkedin.com/in/tharunavula">
                  <img src={linkedin} alt="LinkedIn" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.instagram.com/tharrrrun">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://x.com/tharrrun">
                  <img src={x} alt="twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 4 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(80, 100%, 50%), hsl(120, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={TeamImg4}
              alt="team-mem-4"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                Jayadeep Reddy
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Project Manager
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://github.com/JAYADEEPREDDYPEDDIREDDY">
                  <img src={github} alt="GitHub" width={23}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.linkedin.com/in/peddireddy-jayadeep-reddy-a3014124b">
                  <img src={linkedin} alt="LinkedIn" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.instagram.com/deepu_">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://x.com/JAYADEEPRE45047">
                  <img src={x} alt="twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 5 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(320, 100%, 50%), hsl(360, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={TeamImg5}
              alt="team-mem-5"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                K Sai Sandeep
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Creative Director
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://github.com/Sandeep010-hub">
                  <img src={github} alt="GitHub" width={23}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.linkedin.com/in/sai-sandeep-kalagatla-655416243/">
                  <img src={linkedin} alt="LinkedIn" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.instagram.com/sisi_tarakk/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://x.com/SaiSandeep0241">
                  <img src={x} alt="twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 6 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(205, 100%, 50%), hsl(245, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={TeamImg6}
              alt="team-mem-6"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                Ashok
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Creative Director
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://github.com/ashokq">
                  <img src={github} alt="GitHub" width={23}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.linkedin.com/in/ashok-pemeram-1856721aa/">
                  <img src={linkedin} alt="LinkedIn" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.instagram.com/ashok_3_96/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://x.com/ashokpemeram">
                  <img src={x} alt="twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 7 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(260, 100%, 50%), hsl(290, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={TeamImg7}
              alt="team-mem-7"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                Y Revanth Kumar
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Creative Director
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://github.com/sisi-tarak">
                  <img src={github} alt="GitHub" width={23}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.linkedin.com/in/sisitarak">
                  <img src={linkedin} alt="LinkedIn" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.instagram.com/sisi_tarakk/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://x.com/sisi_tarak">
                  <img src={x} alt="twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 8 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(290, 100%, 50%), hsl(320, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={TeamImg8}
              alt="team-mem-8"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-semibold font-poppins text-lg">
                Yousuf
              </Typography>
              <Typography className="text-sm font-poppins text-[#555555] font-normal">
                Web Developer
              </Typography>
            </Box>
            <Box className="justify-self-center mt-2">
              <IconButton>
                <Link href="https://github.com/Yousuf-36">
                  <img src={github} alt="GitHub" width={23}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.linkedin.com/in/shaik-mohammed-yousuf-90bb34290">
                  <img src={linkedin} alt="LinkedIn" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://www.instagram.com/.you.suf.">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>

              <IconButton>
                <Link href="https://x.com/checking_feed">
                  <img src={x} alt="twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamMobile;
