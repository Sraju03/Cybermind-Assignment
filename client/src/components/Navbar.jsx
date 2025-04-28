import { Button, Container, Group, TextInput } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
import "../assets/Navbar.css";
import Logo from "../assets/logo.png";
import { useElementSize } from "@mantine/hooks";

function Navbar({ setIsCreateModalOpen }) {
  // const navigate = useNavigate();
  return (
    // <Container className="navbar-container">
    //   <div className="navbar">
    //     <img src={Logo} alt="Logo" className="logo" />
    //     <div className="nav-links">
    //       <a href="#">Home</a>
    //       <a href="#">Find Jobs</a>
    //       <a href="#">Find Talents</a>
    //       <a href="#">About Us</a>
    //       <a href="#">Testimonials</a>
    //     </div>
    //     <button className="create-job-button">Create Jobs</button>
    //   </div>
    // </Container>
    <div
      style={{

        padding: "20px 0",

        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        size="xl"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 8px 2px",
          borderRadius: "50px",
          padding: "5px 20px",
        }}
      >
        <Group
          mah={100}
          className="navbar"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div style={{}}>
            <img src={Logo} alt="Logo" className="logo" />
          </div>

          {/* Links */}
          <Group className="nav-links">
            <a href="#">Home</a>
            <a href="#">Find Jobs</a>
            <a href="#">Find Talents</a>
            <a href="#">About Us</a>
            <a href="#">Testimonials</a>
          </Group>

          {/* Create Job Button */}
          <Button
            radius="xl"
            style={{
              backgroundImage: "linear-gradient(to right, #7f00ff, #e100ff)",
            }}
            onClick={() => setIsCreateModalOpen(true)}
          >
            Create Job
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export default Navbar;
