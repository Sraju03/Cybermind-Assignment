import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";
import amazonLogo from "../assets/amazonLogo.png";
import { IconUserPlus, IconBuildings, IconStack2 } from "@tabler/icons-react";

function JobCard({ job }) {
  return (
    <Card
      maw={316}
      mah={360}
      mx="auto"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Group justify="space-between" mt="md" mb="xs">
        <img src={amazonLogo} alt="Logo" className="logo" />
        {/* <Badge color="#B0D9FF">24h ago</Badge> */}
        <Badge color="#B0D9FF">{job.posted}</Badge>
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
          <Text size="sm">{job.salaryRangeMin} - {job.salaryRangeMax}</Text>
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

      <Button color="blue" fullWidth mt="md" radius="md">
        Apply Now
      </Button>
    </Card>
  );
}

export default JobCard;
