import React from "react";
import {
  AppBar,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextareaAutosize,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
function AsessUlang() {
  return (
    <div>
      <Paper elevation={2}>
        <Box mt={1} ml={1} mr={1}>
          <Typography component="h1" variant="h4" align="center">
            Asessmen Ulang
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax={4}
                fullWidth
                //value={value}
                //onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax={4}
                fullWidth
                //value={value}
                //onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax={4}
                fullWidth
                //value={value}
                //onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}

export default AsessUlang;
