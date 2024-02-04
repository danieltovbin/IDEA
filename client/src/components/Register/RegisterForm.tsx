import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./register.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../API/Users/usersCtrl";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [isMatch, setIsMatch] = useState<boolean | null>(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    const showToast = async () => {
      if (matchPassword !== "" && matchPassword === password) {
        await toast.dismiss();
        setIsMatch(true);
        toast.success("confirm password!");
      } else if (matchPassword !== "" && matchPassword !== password) {
        await toast.dismiss();
        setIsMatch(false);
        toast.error("Passwords are not equal", {});
      }
    };

    showToast();
  }, [matchPassword]);

  const registerForm = async (ev: any) => {
    ev.preventDefault();
    if (isMatch) await register({ name: fullName, password, email, userName });
  };

  return (
    <Container className="registerFormDiv" component="main" maxWidth="xs">
      <form
        onSubmit={(ev) => {
          registerForm(ev);
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Register
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="TextField"
              fullWidth
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="TextField"
              fullWidth
              label="User Name"
              variant="outlined"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="TextField"
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              className="TextField"
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="TextField"
              fullWidth
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              // value={matchPassword}
              onChange={(e) => setMatchPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          {isMatch != null ? (
            isMatch ? (
              <p className="confirmPass">Confirm password!</p>
            ) : (
              <p className="noConfirmPass">Passwords needs to be equal.</p>
            )
          ) : (
            <></>
          )}
          <Grid item xs={12}>
            <Button
              className="submitBtn"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default RegisterForm;
