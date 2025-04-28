import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";
import { IconUserPlus, IconBuildings, IconStack2 } from "@tabler/icons-react";
import amazon from "../assets/Amazon.png";
import swiggy from "../assets/Swiggy.png";
import tesla from "../assets/Tesla.png";
const companyLogos = {
  Amazon: amazon,
  Swiggy: swiggy,
  Tesla: tesla,
};
function JobCard({ job, logo }) {
  return (
    <Card
      maw={316}
      mah="auto"
      mx="auto"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Group justify="space-between" mt="md" mb="xs">
        <img
          src={companyLogos[job.companyName]}
          alt="Logo"
          className="logo"
          style={{
            width: 63,
            height: 62,
            objectFit: "cover",
            borderRadius: "50% 50%",
          }}
        />
        <Badge color="#B0D9FF" style={{ color: "black" }}>
          24h ago
        </Badge>
        {/* <Badge color="#B0D9FF">{job.posted}</Badge> */}
      </Group>
      {/* <Text fw={700}>Full Stack Developer</Text> */}
      <Text fw={700}>{job.jobTitle}</Text>

      <Group mt="md" mb="xs">
        <Flex>
          <IconUserPlus size={16} />
          <Text size="sm"> {job?.experience ?? `1-3 yrs`}</Text>
          {/* <Text size="sm">1-3 yrs</Text> */}
        </Flex>
        <Flex>
          <IconBuildings size={16} />
          <Text size="sm">{job?.mode ?? `Onsite`}</Text>
          {/* <Text size="sm">Onsite</Text> */}
        </Flex>
        <Flex>
          <IconStack2 size={16} />
          <Text size="sm">{job.salaryRangeMax}</Text>
          {/* <Text size="sm">12 LPA</Text> */}
        </Flex>
      </Group>
      {/* <Text size="sm" c="dimmed">
        A user-friendly interface lets you browse stunning photos and videos
        Filter destinations based on interests and travel style, and create
        personalized
      </Text> */}
      <Text size="sm" c="dimmed">
        {job.jobDescription}
      </Text>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="xl" // (use xl for a more pill-shaped button)
        size="md" // (size="md" for normal height)
        style={{
          padding: " 10 12",
          fontWeight: 600,
          letterSpacing: "0.5px",
        }}
      >
        Apply Now
      </Button>
    </Card>
  );
}

export default JobCard;
