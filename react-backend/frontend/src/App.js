import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";

const API_URL = 'https://appcontainer.gentleglacier-98bdc4b1.eastus.azurecontainerapps.io/api/HttpTrigger1';

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
      const response = await axios.post(API_URL, inputValue);
      setInputValue("");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Put your data entry
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <TextField
          label="Enter your data here"
          variant="outlined"
          size="large"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          sx={{ width: "50vw" }}
        />
        <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2, width: "50vw", maxWidth: "200px" }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default App;