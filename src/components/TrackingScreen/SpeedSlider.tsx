/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Slider, Typography } from "@mui/material";

type TSpeedSlider = {
  speed: number;
  setSpeed: any;
};

const SpeedSlider = ({ speed, setSpeed }: TSpeedSlider) => {
  const handleChange = (_event: any, newValue: any) => {
    setSpeed(newValue);
  };

  return (
    <Box sx={{ width: 300, mt: 2 }}>
      <Typography id="speed-slider" gutterBottom>
        Speed Control
      </Typography>
      <Slider
        value={speed}
        min={1}
        max={10}
        step={1}
        onChange={handleChange}
        aria-labelledby="speed-slider"
      />
    </Box>
  );
};

export default SpeedSlider;
