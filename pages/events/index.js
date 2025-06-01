import Events from "@/components/Events";
import NavBarWrapper from "@/components/Wrappers/NavBarWrapper";
import { Stack } from "@chakra-ui/react";

export default function EventsPage() {
  return (
    <>
      <NavBarWrapper>
        <Stack gap={4} pt={{ base: 12, lg: 16 }}>
          <Events />
        </Stack>
      </NavBarWrapper>
    </>
  );
}
