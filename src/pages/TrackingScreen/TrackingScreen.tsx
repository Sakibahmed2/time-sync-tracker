import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AnalogClock from "../../components/TrackingScreen/AnalogClock";
import ShareButton from "../../components/TrackingScreen/ShareButton";
import SpeedSlider from "../../components/TrackingScreen/SpeedSlider";

const TrackingScreen = () => {
  const [speed, setSpeed] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sharedSpeed = params.get("speed");
    if (sharedSpeed) {
      setSpeed(Number(sharedSpeed));
    }
  }, [location]);

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 1,
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          p: "200px 20px",
          border: "2px solid lghtgray",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <AnalogClock speed={speed} />
        <SpeedSlider speed={speed} setSpeed={setSpeed} />
        <ShareButton speed={speed} />
      </Stack>
    </Stack>
  );
};

export default TrackingScreen;
