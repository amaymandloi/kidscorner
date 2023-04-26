import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/Navbar";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Box>
      <NavBar />
      <Typography>Hello World!</Typography>
    </Box>
  );
}

export default App;
