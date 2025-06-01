import Contact from "@/components/Contact";
import NavBarWrapper from "@/components/Wrappers/NavBarWrapper";
import { Stack } from "@chakra-ui/react";

export default function ContactPage() {
    return (
        <>
            <NavBarWrapper>
                <Stack gap={4} pt={{ base: 12, lg: 16 }}>
                    <Contact />
                </Stack>
            </NavBarWrapper>
        </>
    )
}