// pages/JobList.jsx

import {  useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { SimpleGrid, Container } from "@mantine/core";
import axios from "axios";

// const jobData = [
//   {
//     title: "Full Stack Developer",
//     experience: "1-3 yr Exp",
//     mode: "Onsite",
//     salary: "12LPA",
//     posted: "24h Ago",
//     description:
//       "A user-friendly interface lets you browse stunning photos and videos...",
//   },
//   {
//     title: "Full Stack Developer",
//     experience: "1-3 yr Exp",
//     mode: "Onsite",
//     salary: "12LPA",
//     posted: "24h Ago",
//     description:
//       "A user-friendly interface lets you browse stunning photos and videos...",
//   },
//   {
//     title: "Full Stack Developer",
//     experience: "1-3 yr Exp",
//     mode: "Onsite",
//     salary: "12LPA",
//     posted: "24h Ago",
//     description:
//       "A user-friendly interface lets you browse stunning photos and videos...",
//   },
//   {
//     title: "Full Stack Developer",
//     experience: "1-3 yr Exp",
//     mode: "Onsite",
//     salary: "12LPA",
//     posted: "24h Ago",
//     description:
//       "A user-friendly interface lets you browse stunning photos and videos...",
//   },
//   {
//     title: "Full Stack Developer",
//     experience: "1-3 yr Exp",
//     mode: "Onsite",
//     salary: "12LPA",
//     posted: "24h Ago",
//     description:
//       "A user-friendly interface lets you browse stunning photos and videos...",
//   },
//   {
//     title: "Full Stack Developer",
//     experience: "1-3 yr Exp",
//     mode: "Onsite",
//     salary: "12LPA",
//     posted: "24h Ago",
//     description:
//       "A user-friendly interface lets you browse stunning photos and videos...",
//   },
//   {
//     title: "Full Stack Developer",
//     experience: "1-3 yr Exp",
//     mode: "Onsite",
//     salary: "12LPA",
//     posted: "24h Ago",
//     description:
//       "A user-friendly interface lets you browse stunning photos and videos...",
//   },
//   {
//     title: "Full Stack Developer",
//     experience: "1-3 yr Exp",
//     mode: "Onsite",
//     salary: "12LPA",
//     posted: "24h Ago",
//     description:
//       "A user-friendly interface lets you browse stunning photos and videos...",
//   },
//   // Add more jobs as needed
// ];

function JobList({isCreateModalOpen,filter}) {
  const [jobData, setJobData] = useState([]);
  useEffect(()=>{
    async function fetchJobs() {
      const response = await axios.post("http://localhost:5000/api/jobs",{collection:"Jobs"});
      const data =  response.data.data;
      setJobData(data.filter((job)=>{
        if(filter.text){
          return job.jobTitle.toLowerCase().includes(filter.text.toLowerCase()) || job.companyName.toLowerCase().includes(filter.text.toLowerCase()) || job.jobDescription.toLowerCase().includes(filter.text.toLowerCase());
        }
        if(filter.location){
          return job.location.toLowerCase().includes(filter.location.toLowerCase());
        }
        if(filter.jobType){
          return job.jobType.toLowerCase().includes(filter.jobType.toLowerCase());
        }
        return true;

      }));
      
    }
    fetchJobs();

  },[isCreateModalOpen,filter])

  return (
    <Container my="md" maw={1312} mah={360}>
      <SimpleGrid cols={4} spacing="lg">
        {jobData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default JobList;
