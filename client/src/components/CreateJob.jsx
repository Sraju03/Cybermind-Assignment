import {
  Container,
  TextInput,
  Textarea,
  Select,
  Button,
  Group,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import {
  IconCalendarEventFilled,
  IconChevronsRight,
  IconChevronsDown,
  IconArrowsSort,
} from "@tabler/icons-react";
import axios from "axios";

function CreateJobForm(setIsCreateModalOpen) {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryRangeMin: "",
    salaryRangeMax: "",
    applicationDeadline: "",
    jobDescription: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleJobTypeChange = (value) => {
    setJobData((prevData) => ({
      ...prevData,
      jobType: value,
    }));
  };

  const handleSubmit = async (submitType) => {
    try {
      console.log({ ...jobData, submitType });

      const response = await axios.post(
        "http://localhost:5000/api/create-job",
        {
          data: jobData,
          collection: "Jobs",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.flag) {
        setIsCreateModalOpen(false);
        alert("Job posted successfully");
        setJobData({
          jobTitle: "",
          companyName: "",
          location: "",
          jobType: "",
          salaryRangeMin: "",
          salaryRangeMax: "",
          applicationDeadline: "",
          jobDescription: "",
          submitType: submitType,
        });
      }
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <Container
      size="md"
      style={{
        width: "848px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "30px",
        border: "1px solid rgb(0, 0, 0)",
        borderRadius: "16px",
        boxShadow: "rgba(169, 169, 169, 0.25) 0px 4px 12px",
        position: "fixed",
        zIndex: 3,
      }}
    >
      <Title order={2} align="center" mb="xl">
        Create Job Opening
      </Title>

      <form>
        <Group grow mb="md">
          <TextInput
            maw={376}
            name="jobTitle"
            value={jobData.jobTitle}
            onChange={handleInputChange}
            label="Job Title"
            placeholder="Full Stack Developer"
          />
          <TextInput
            name="companyName"
            value={jobData.companyName}
            onChange={handleInputChange}
            label="Company Name"
            placeholder="Amazon, Microsoft, Swiggy"
          />
        </Group>

        <Group grow mb="md">
          <TextInput
            name="location"
            value={jobData.location}
            onChange={handleInputChange}
            label="Location"
            placeholder="Choose Preferred Location"
          />
          <Select
            label="Job Type"
            data={[
              { value: "FullTime", label: "FullTime" },
              { value: "PartTime", label: "PartTime" },
              { value: "Contract", label: "Contract" },
              { value: "Internship", label: "Internship" },
            ]}
            placeholder="Select Job Type"
            value={jobData.jobType}
            onChange={handleJobTypeChange}
          />
        </Group>

        <Group grow mb="md">
          <Group grow>
            <TextInput
              name="salaryRangeMin"
              value={jobData.salaryRangeMin}
              onChange={handleInputChange}
              label="Salary Range (Min)"
              leftSection={<IconArrowsSort />}
              placeholder="₹ 0"
            />
            <TextInput
              name="salaryRangeMax"
              value={jobData.salaryRangeMax}
              onChange={handleInputChange}
              label="Salary Range (Max)"
              leftSection={<IconArrowsSort />}
              placeholder="₹ 12,00,000"
            />
          </Group>
          <DateInput
            name="applicationDeadline"
            label="Application Deadline"
            placeholder="Pick date"
            value={jobData.applicationDeadline}
            onChange={(value) =>
              setJobData((prevData) => ({
                ...prevData,
                applicationDeadline: value,
              }))
            }
            rightSection={<IconCalendarEventFilled />}
          />
        </Group>

        <Textarea
          name="jobDescription"
          value={jobData.jobDescription}
          onChange={handleInputChange}
          label="Job Description"
          placeholder="Please share a description to let the candidate know more about the job role"
          minRows={4}
          mb="md"
        />

        <Group justify="space-between" mt="xl">
          <Button
            rightSection={<IconChevronsDown />}
            variant="outline"
            radius="md"
            size="md"
            style={{
              border: " 1px solid #222222",
              color: "#222222",
              width: 160,
            }}
            onClick={() => handleSubmit("save")}
          >
            Save Draft
          </Button>
          <Button
            rightSection={<IconChevronsRight />}
            radius="md"
            size="md"
            style={{
              width: 160,
              backgroundColor: "#00AAFF",
            }}
            type="button"
            onClick={() => handleSubmit("publish")}
          >
            Publish
          </Button>
        </Group>
      </form>
    </Container>
  );
}

export default CreateJobForm;
