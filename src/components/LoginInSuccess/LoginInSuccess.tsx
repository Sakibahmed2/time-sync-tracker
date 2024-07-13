import { Box, Button } from "@mui/material";
import bgImg from "../../assets/burger-bg.png";
import successImg from "../../assets/success-login.png";
import { motion } from "framer-motion";

const animation = {
  hidden: {
    y: 1000,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const LoginInSuccess = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img src={bgImg} alt="bgImg" className="h-full max-h-[100vh]" />

      <motion.div
        variants={animation}
        initial="hidden"
        animate="visible"
        className="bg-gray-100 h-[400px] w-[340px] absolute bottom-0 rounded-t-3xl  overflow-hidden"
      >
        <div className="flex flex-col justify-center items-center mt-4 mx-3">
          <img src={successImg} alt="successImg" className=" size-32" />
          <p className="text-2xl font-semibold mt-2">Login successfully</p>
          <Button
            fullWidth
            component={"a"}
            href="/tracking-screen"
            sx={{
              my: 2,
              color: "white",
              borderRadius: 10,
            }}
          >
            Go to tracking screen
          </Button>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              my: 2,
              color: "black",
              borderRadius: 10,
            }}
          >
            Logout
          </Button>
        </div>
      </motion.div>
    </Box>
  );
};

export default LoginInSuccess;
