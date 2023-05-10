import { AddStudent } from "./AddStudent";
import "./App.css";
import { StudentDetails } from "./StudentDetails";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { TeacherDetails } from "./TeacherDetails";
import { AddTeacher } from "./AddTeacher";

export default function App() {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student & Teacher Management
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>

          <Button color="inherit" onClick={() => navigate("/addstudent")}>
            Student
          </Button>
          <Button color="inherit" onClick={() => navigate("/addteacher")}>
            Teacher
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/addteacher" element={<AddTeacher />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
