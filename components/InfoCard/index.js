import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';

export default function InfoCard({
    imgSrc,
    heading,
    text,
    link
}) {
    return (
        <Center>
            <Flex
                overflow={'hidden'}
                border={'1px solid #F2F2F2'}
                h={'100%'}
                px={useBreakpointValue({ base: 4, lg: 12 })}
                pt={useBreakpointValue({ base: 2, md: 4, lg: 8 })}
                pb={useBreakpointValue({ base: 4, md: 8, lg: 16 })}
                flexDirection={'column'}
                alignItems={'center'}
                textAlign={'center'}
            >
                <Box w={useBreakpointValue({ base: '120px', md: '160px', lg: '200px' })}>
                    <Img
                        src={imgSrc}
                        objectFit="cover"
                        alt={'Blog Image'}
                    />
                </Box>
                <VStack spacing={8}>
                    <Heading
                        fontSize={useBreakpointValue({ base: 'lg', lg: '2xl' })}>
                        {heading}
                    </Heading>
                    <Text
                        fontFamily={'Source Sans Pro'}
                        fontSize={useBreakpointValue({ base: 'sm', lg: 'md' })}>
                        {text}
                    </Text>
                    {/* <TextButton text={'Learn More'} /> */}
                </VStack>
            </Flex>
        </Center>
    );
}