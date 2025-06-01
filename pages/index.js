import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import ReadyToWork from "@/components/ReadyToWork";
import WhatWeDo from "@/components/WhatWeDo";
import NavBarWrapper from "@/components/Wrappers/NavBarWrapper";
import { Flex, Stack, StackDivider } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <NavBarWrapper position={'absolute'}>
        <Hero />
        <Stack
          bgGradient={'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(84,56,126,0.4) 50%, rgba(230,141,153,0.1) 60%, rgba(0,0,0,1) 100%)'}
          divider={<StackDivider borderColor={'#F2F2F2'} />}
          px={{ base: 8, md: 12, lg: 20 }}
        >
          <AboutUs />
          <WhatWeDo />
          <ReadyToWork />
        </Stack>
      </NavBarWrapper>
    </>
  )
}