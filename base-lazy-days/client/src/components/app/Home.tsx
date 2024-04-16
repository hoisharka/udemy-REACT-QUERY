import { Icon, Stack, Text } from "@chakra-ui/react";
import { GiFlowerPot } from "react-icons/gi";

import { usePrefetchTreetments } from "../treatments/hooks/useTreatments";

import { BackgroundImage } from "@/components/common/BackgroundImage";
import { useEffect } from "react";

export function Home() {
  usePrefetchTreetments()
  useEffect(() => {
    console.log("monthYear useEffect");
  }, []);

  return (
    <Stack textAlign="center" justify="center" height="84vh">
      <BackgroundImage />
      <Text textAlign="center" fontFamily="Forum, sans-serif" fontSize="6em">
        <Icon m={4} verticalAlign="top" as={GiFlowerPot} />
        Lazy Days Spa
      </Text>
      <Text>Hours: limited</Text>
      <Text>Address: nearby</Text>
    </Stack>
  );
}
