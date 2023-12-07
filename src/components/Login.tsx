import React, { useState } from "react";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

interface UserFormProps {
  name: string;
  phoneNumber: string;
  email: string;
}

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/second-page";

  const [formData, setFormData] = useState<UserFormProps>({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("userFormData", JSON.stringify(formData));
    navigate(from, { replace: true });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              User Information
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
