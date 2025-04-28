import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/core/styles/global.css";
import "./index.css";
import "@mantine/dates/styles.css";
import Navbar from "./components/Navbar.jsx";
import JobFilter from "./components/JobFilter.jsx";
import JobList from "./pages/JobList.jsx";
import CreateJobForm from "./components/CreateJob.jsx";

const App = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
const [filter, setFilter] = useState({text:"",location:"",jobType:""});
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        <Navbar setIsCreateModalOpen={setIsCreateModalOpen} />

        <JobFilter setFilter={setFilter} filter={filter} />
      </div>

      <JobList isCreateModalOpen={isCreateModalOpen} filter={filter} />

      {isCreateModalOpen && (
        <>
          <div
            size={"100%"}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",

              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 2,
            }}
            onClick={() => setIsCreateModalOpen(false)}
          ></div>
          <CreateJobForm setIsCreateModalOpen={setIsCreateModalOpen}/>
        </>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colorScheme: "light",
        fontFamily: "Satoshi Variable, sans-serif",
        primaryColor: "blue",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
