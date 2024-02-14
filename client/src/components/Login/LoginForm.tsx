import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { login, register } from "../../API/Users/usersClientCtrl";
import "./loginForm.scss";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const loginForm = async (ev: any) => {
    ev.preventDefault();
    if (password && userName) {
      const result = await login({ userName, password });

      if (result) {
        const { ok, userToken } = result;
        if (ok && userToken) {
          sessionStorage.setItem("userToken", userToken);
          navigate("/descriptionProject");
        }
      } else {
        console.error("No response from server");
      }
    }
  };

  return (
    <Container className="loginFormDiv" component="main" maxWidth="xs">
      <form
        onSubmit={(ev) => {
          loginForm(ev);
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              כניסה
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="TextField"
            fullWidth
            label="שם משתמש"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            className="TextField"
            fullWidth
            label="סיסמה"
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
          <Button
            className="submitBtn"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            התחברות
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginForm;
