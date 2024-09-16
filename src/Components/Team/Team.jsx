import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
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
import TeamImg6 from "../../assets/TeamMembers/ashok.jpg";
import TeamImg7 from "../../assets/TeamMembers/revanth.jpg";
import TeamImg8 from "../../assets/TeamMembers/yusuf.jpg";

const Team = () => {
  return (
    <Container className="pt-16 pb-20" id="team">
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
            className="text-2xl sm:text-3xl md:text-xl lg:text-4xl text-headColor px-5 md:px-0 text-center  font-poppins font-normal mt-4"
          >
            Creative Minds, Tech Experts
          </Typography>
        </div>
      </Grid>

      <Box className="gap-x-7 gap-y-8 grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Team Member 01 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg1}
            alt="Team Member 01"
            className="rounded-t-lg"
            style={{
              height: "220px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <hr className="border-iconBgColor border-b-[1.6px] border-solid mt-5 mb-2 w-[60px] mx-auto" />

          <Box>
            <Typography className="pt-2 font-semibold font-poppins text-lg">
              S Gnana Sekhar
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Founder
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
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
        {/* Team Member 01 */}
        {/* Team Member 02 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg2}
            alt="Team Member 01"
            className="rounded-t-lg"
            style={{
              height: "220px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <hr className="border-iconBgColor border-b-[1.6px] border-solid mt-5 mb-2 w-[60px] mx-auto" />

          <Box>
            <Typography className="pt-2 font-semibold font-poppins text-lg">
              Sisindri Sigamsetti
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Co-Founder
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
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
        {/* Team Member 02 */}
        {/* Team Member 03 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg3}
            alt="Team Member 01"
            className="rounded-t-lg"
            style={{
              height: "220px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <hr className="border-iconBgColor border-b-[1.6px] border-solid mt-5 mb-2 w-[60px] mx-auto" />

          <Box>
            <Typography className="pt-2 font-semibold font-poppins text-lg">
              A Tharun
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Chief Executive
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
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
        {/* Team Member 03 */}
        {/* Team Member 04 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg4}
            alt="Team Member 01"
            className="rounded-t-lg"
            style={{
              height: "220px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <hr className="border-iconBgColor border-b-[1.6px] border-solid mt-5 mb-2 w-[60px] mx-auto" />

          <Box>
            <Typography className="pt-2 font-semibold font-poppins text-lg">
              Jayadeep Reddy
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Chief Technical
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
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
        {/* Team Member 04 */}
        {/* Team Member 05 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg5}
            alt="Team Member 01"
            className="rounded-t-lg"
            style={{
              height: "220px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <hr className="border-iconBgColor border-b-[1.6px] border-solid mt-5 mb-2 w-[60px] mx-auto" />

          <Box>
            <Typography className="pt-2 font-semibold font-poppins text-lg">
              K Sai Sandeep
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Chief Operater
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
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
              <Link href="https://www.instagram.com/mad_maxie921/">
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
        {/* Team Member 05 */}
        {/* Team Member 06 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg6}
            alt="Team Member 01"
            className="rounded-t-lg"
            style={{
              height: "220px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <hr className="border-iconBgColor border-b-[1.6px] border-solid mt-5 mb-2 w-[60px] mx-auto" />

          <Box>
            <Typography className="pt-2 font-semibold font-poppins text-lg">
              Ashok
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Chief Marketer
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
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
        {/* Team Member 06 */}
        {/* Team Member 06 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg7}
            alt="Team Member 01"
            className="rounded-t-lg"
            style={{
              height: "220px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <hr className="border-iconBgColor border-b-[1.6px] border-solid mt-5 mb-2 w-[60px] mx-auto" />

          <Box>
            <Typography className="pt-2 font-semibold font-poppins text-lg">
              Y Revanth Kumar
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Project Manager
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
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
        {/* Team Member 06 */}

        {/* Team Member 09 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg8}
            alt="Team Member 01"
            className="rounded-t-lg"
            style={{
              height: "220px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <hr className="border-iconBgColor border-b-[1.6px] border-solid mt-5 mb-2 w-[60px] mx-auto" />

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
        {/* Team Member 09 */}
      </Box>
    </Container>
  );
};

export default Team;
