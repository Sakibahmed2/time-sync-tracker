import { Box } from "@mui/material";
import bgImg from "./assets/image 32.png";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const App = () => {
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

      <div className="w-[280px] py-10 px-4 bg-orange-500 absolute bottom-10 rounded-[50px]  overflow-hidden">
        <div className="flex flex-col justify-center items-center  text-center">
          <p className="text-4xl text-white font-semibold">
            We serve incomparable delicacies
          </p>
          <p className="my-5 text-white">
            All the best restaurants with their top menu waiting for you, they
            cant’t wait for your order!!
          </p>
          <Link to={"/login"} className="bg-white rounded-full p-5">
            <MoveRight size={40} className="bg" />
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default App;
