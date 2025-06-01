import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import {
    Box, Flex
} from '@chakra-ui/react'

export default function NavBarWrapper({
    ...otherProps
}) {
    return (
        <Flex minH={'100vh'} flexDirection={'column'} justifyContent={'space-between'} gap={12}>
            <Box>
                <NavBar {...otherProps} zIndex={10} width={'100%'} />
                <Box>
                    {otherProps.children}
                </Box>
            </Box>
            <Footer />
        </Flex>
    );
};