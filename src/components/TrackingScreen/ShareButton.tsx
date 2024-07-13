import { Button } from "@mui/material";

const ShareButton = ({ speed }: { speed: number }) => {
  const generateShareURL = () => {
    const url = `${window.location.origin}/tracking-screen?speed=${speed}`;
    navigator.clipboard.writeText(url);
    alert("Share URL copied to clipboard!");
  };

  return (
    <Button
      fullWidth
      sx={{
        color: "white",
      }}
      onClick={generateShareURL}
    >
      Share
    </Button>
  );
};

export default ShareButton;
