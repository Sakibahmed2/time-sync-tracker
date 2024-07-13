/* eslint-disable @typescript-eslint/no-explicit-any */
import GoogleIcon from "@mui/icons-material/Google";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import TimeSyncForm from "../../components/Forms/TimeSyncForm";
import TimeSyncInput from "../../components/Forms/TimeSyncInput";
import app from "../../firebase/firebase.config";
import { setToLocalStorage } from "../../utils/local-storage";

const defaultValues = {
  email: "",
  name: "",
  password: "",
};

const Register = () => {
  const [isShow, setIsShow] = useState(false);
  // const navigate = useNavigate();

  // firebase
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // const handleSubmit = async (value: FieldValues) => {
  //   const toastId = toast.loading("Creating user....");
  //   try {
  //     const userInfo = {
  //       name: value.name,
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

  //     fetch(`http://localhost:5000/api/v1/register`, postRequestOption)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.success) {
  //           toast.success(data.message, { id: toastId });
  //           navigate("/login");
  //         }
  //       });
  //   } catch (err: any) {
  //     console.log(err);
  //   }
  // };

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user: any = result.user;
        console.log(user?.accessToken);
        if (user?.accessToken) {
          setToLocalStorage("accessToken", user?.accessToken);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleSubmit = async (value: FieldValues) => {
    const email = value.email;
    const password = value.password;

    const toastId = toast.loading("Creating user....");
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user: any = result.user;
          user.displayName = value.name;
          console.log(user);
          if (user?.accessToken) {
            toast.success("User created successfully", { id: toastId });
            setToLocalStorage("accessToken", user?.accessToken);
          }
        })
        .catch((error) => {
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
              cursor: "pointer",
            }}
            component={"div"}
            onClick={handleGoogleSingIn}
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
