import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import BalanceIcon from "@mui/icons-material/Balance";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
const App = () => {
  const [Celcius, setCelcius] = useState();
  const [Fahernheit, setFahernheit] = useState();
  const [cel, setcel] = useState(true);
  const handleChange = (event) => {
    setCelcius(event.target.value);
    if (event.target.value === "") {
      setFahernheit("");
    }
  };
  const changeUnit=()=>{
    setcel(!cel);
      setCelcius("");
      setFahernheit("");
    console.log(cel);
  }
  const clearall=()=>{
    setCelcius("");
    setFahernheit("");
  } 
  
  const showTemp = (e) => {
    if(cel)
    {
      console.log("Temperature is :", Celcius);
    let fara = (Celcius * 9) / 5 + 32;
    setFahernheit(fara);
    console.log("Converted Value is :", Fahernheit);
    }
    else{
      let sel=(Celcius-32)*5/9;
      setFahernheit(sel);
    }
    
  }

  return (
    <div>
      <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={600}
        height={400}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        
        <Typography position={"top"} justifyContent={"center"}>
         <DeviceThermostatIcon  fontSize="large" /> Temperature Converter
        </Typography>
        
        <Box
          display="flex"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
          maxWidth={600}
          height={300}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
        >
          <TextField
            onChange={handleChange}
            value={Celcius}
            name="Celcius"
            margin="normal"
            type={"Number"}
            variant="outlined"
            placeholder= {cel ? "Celcius" : "Fahernheit"}   
          />
          <Button
            onClick={showTemp}
            variant="contained"
            endIcon={<BalanceIcon color="#000070" />}
          >
            Convert
          </Button>

          <TextField value={Fahernheit} placeholder={!cel ? "Celcius" : "Fahernheit"}  />
          <Button onClick={changeUnit} ><FlipCameraAndroidIcon/></Button>
        </Box>
          <Button position="top" onClick={clearall} color="error" >clear</Button>

        <Typography>Copyright @ Omkar Raghu </Typography>
      </Box>
    </div>
  );
};

export default App;
