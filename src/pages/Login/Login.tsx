/* eslint-disable @typescript-eslint/no-explicit-any */
import GoogleIcon from "@mui/icons-material/Google";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import TimeSyncForm from "../../components/Forms/TimeSyncForm";
import TimeSyncInput from "../../components/Forms/TimeSyncInput";
import app from "../../firebase/firebase.config";
import { getUserInfo } from "../../services/auth.services";
import { toast } from "sonner";
import { setToLocalStorage } from "../../utils/local-storage";

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [isShow, setIsShow] = useState(false);
  const auth = getAuth(app);

  const navigate = useNavigate();

  const user = getUserInfo();

  console.log(user);

  // const handleSubmit = async (value: FieldValues) => {
  //   const toastId = toast.loading("Loading....");
  //   try {
  //     const userInfo = {
  //       email: value.email,
  //       password: value.password,
  //     };

  //     const postRequestOption = {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(userInfo),
  //     };

  //     fetch(`http://localhost:5000/api/v1/login`, postRequestOption)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.success) {
  //           toast.success(data.message, { id: toastId });
  //           setToLocalStorage("accessToken", data.token);
  //         }
  //       });
  //   } catch (err: any) {
  //     console.log(err);
  //   }
  // };

  const handleSubmit = async (value: FieldValues) => {
    const email = value.email;
    const password = value.password;

    const toastId = toast.loading("Loading....");
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user: any = result.user;
          user.displayName = value.name;
          console.log(user);
          if (user?.accessToken) {
            toast.success("User login successfully", { id: toastId });
            setToLocalStorage("accessToken", user?.accessToken);
            navigate("/login-success");
          }
        })
        .catch((error) => {
          toast.error("User login failed!", { id: toastId });
          console.log(error);
        });
    } catch (err: any) {
      console.log(err);
    }
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
              Login to your account
            </Typography>
            <Typography component={"p"} mt={1} fontSize={15} color={"gray"}>
              Please sign in to your account
            </Typography>
          </Box>
        </Stack>

        <TimeSyncForm onSubmit={handleSubmit} defaultValues={defaultValues}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TimeSyncInput name="email" label="Email address" fullWidth />
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
          <Typography
            component={"p"}
            sx={{
              textAlign: "end",
              color: "orange",
            }}
          >
            Forgot password
          </Typography>

          <Button
            type="submit"
            fullWidth
            sx={{
              my: 2,
              color: "white",
              borderRadius: 10,
            }}
          >
            Sign in
          </Button>
        </TimeSyncForm>

        <Divider>Or sign in with</Divider>

        <Stack
          direction={"row"}
          sx={{
            justifyContent: "center",
            mt: 2,
            mb: 4,
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
            Don&#8217;t have an account ?{" "}
            <Link to={"/register"} className="text-orange-500 font-semibold">
              Register here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
