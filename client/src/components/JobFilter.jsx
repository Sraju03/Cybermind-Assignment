import {
  Container,
  Flex,
  Select,
  TextInput,
  RangeSlider,
  Text,
  SimpleGrid,
  Center,
  Group,
} from "@mantine/core";
import { useState } from "react";

import {
  IconSearch,
  IconChevronDown,
  IconMapPin,
  IconUser,
} from "@tabler/icons-react";
import "../assets/JobFilter.css";

function JobFilter({filter , setFilter}) {
  const [value, setValue] = useState([0, 40]);

  return (
<Container my="md" maw={1440} mah={124} shadow="sm">
      <SimpleGrid
        cols={4}
        spacing="md"
     
        styles={{ alignItems: "center", backgroundColor: "white" }}
      >
        <div>
          <TextInput
            className="text-input"
            placeholder="Search By Job Title, Role"
            value={filter.text}
            onChange={(e) => setFilter({...filter,text:e.target.value})}
            leftSection={<IconSearch size={16} />}
          />
        </div>
        <div>
          <TextInput
            className="text-input"
            placeholder="Preferred Location"
            value={filter.location}
            onChange={(e) => setFilter({...filter,location:e.target.value})}
            leftSection={<IconMapPin size={16} />}
          />
        </div>
        <div>
          <Select
            className="text-input"
            placeholder="Job type"
            data={["FullTime", "PartTime", "Contract", "Internship"]}
            w={200}
            value={filter.jobType}
            onChange={(value) => setFilter({...filter,jobType:value})}
            rightSection={<IconChevronDown size={16} stroke={0.5} />} // <- MANUALLY control the icon
            leftSection={<IconUser size={20} />}
          />
        </div>
        <div>
          <Flex justify="space-between" align="center" mb={7}>
            <Text size="{16}">Salary Per Month</Text>
            <Text size="sm">
              ₹{value[0]}k - ₹{value[1]}k
            </Text>
          </Flex>
          <RangeSlider
            value={value}
            onChange={setValue}
            min={0}
            max={100}
            step={1}
            mb={20}
            styles={{
              track: {
                height: 2,
                backgroundColor: "#CCC2C2", // light grey for unselected track
              },
              bar: {
                height: 2,
                backgroundColor: "#000000", // solid black for selected track
              },
              mark: {
                width: 8,
                height: 8,
                borderRadius: 9999,
                backgroundColor: "#000", // black dots
                border: "2px solid CCC2C2",
              },
              markFilled: {
                backgroundColor: "#ffffff", // black when filled
              },
              markLabel: {
                fontSize: 12,
                marginBottom: 5,
                marginTop: 0,
                paddingRight: 2,
              },
              thumb: {
                height: 13,
                width: 12,
                backgroundColor: "#ffffff", // black thumb
                border: "4px solid black", // white inside the thumb
              },
            }}
          />
        </div>
      </SimpleGrid>
    </Container>   
  );
}

export default JobFilter;
