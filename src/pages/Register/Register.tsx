import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import TimeSyncForm from "../../components/Forms/TimeSyncForm";
import { Link } from "react-router-dom";
import TimeSyncInput from "../../components/Forms/TimeSyncInput";
import { FieldValues } from "react-hook-form";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";

const defaultValues = {
  email: "",
  name: "",
  password: "",
};

const Register = () => {
  const [isShow, setIsShow] = useState(false);

  console.log(isShow);

  const handleSubmit = async (value: FieldValues) => {
    console.log(value);
  };

  return (
    <Stack
      direction={{
        md: "row",
      }}
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 500,
          width: "100%",
          boxShadow: 1,
          borderRadius: 2,
          p: {
            xs: 2,
            md: 6,
          },
          textAlign: "center",
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            mb: 4,
          }}
        >
          <Box
            sx={{
              textAlign: {
                xs: "start",
                md: "center",
              },
            }}
          >
            <Typography variant="h4" component={"h2"} fontWeight={600}>
              Create your new account
            </Typography>
            <Typography component={"p"} mt={1} fontSize={15} color={"gray"}>
              Create an account to start looking for the food you like
            </Typography>
          </Box>
        </Stack>

        <TimeSyncForm onSubmit={handleSubmit} defaultValues={defaultValues}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TimeSyncInput name="email" label="Email" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <TimeSyncInput name="name" label="User name" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <TimeSyncInput
                name="password"
                label="Password"
                fullWidth
                type={isShow ? "text" : "password"}
              />

              <Stack direction={"row"} justifyContent={"center"}>
                <Box
                  sx={{
                    position: "relative",
                    bottom: 42,
                    left: {
                      xs: 135,
                      md: 155,
                    },
                    cursor: "pointer",
                  }}
                  component={"div"}
                  onClick={() => setIsShow(!isShow)}
                >
                  {isShow ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </Box>
              </Stack>
            </Grid>
          </Grid>

          <Stack direction={"row"} textAlign={"start"}>
            <Checkbox />
            <Typography component={"p"}>
              I Agree with{" "}
              <Typography component={"span"} color={"orange"} fontWeight={600}>
                Terms of service
              </Typography>{" "}
              and{" "}
              <Typography component={"span"} color={"orange"} fontWeight={600}>
                Privacy policy
              </Typography>{" "}
            </Typography>
          </Stack>

          <Button
            type="submit"
            fullWidth
            sx={{
              my: 2,
              color: "white",
              borderRadius: 10,
            }}
          >
            Register
          </Button>
        </TimeSyncForm>

        <Divider>Or sign in with</Divider>

        <Stack
          direction={"row"}
          sx={{
            justifyContent: "center",
            mt: 2,
            mb: 2,
          }}
        >
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: 10,
              padding: 2,
            }}
          >
            <GoogleIcon />
          </Box>
        </Stack>

        <Box>
          <Typography component={"p"}>
            Have an account ?{" "}
            <Link to={"/login"} className="text-orange-500 font-semibold">
              Sign in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Register;
