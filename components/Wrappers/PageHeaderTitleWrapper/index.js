import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue
} from '@chakra-ui/react';

export default function PageHeaderTitleWrapper({
    heading,
    subheading,
    text,
    gap,
    ...otherProps
}) {
    return (
        <Flex
            flexDirection={'column'}
            px={{ base: 8, md: 12, lg: 20 }}
            pb={4}
            justifyContent={'center'}
            gap={gap ? gap : useBreakpointValue({ base: 8, md: 12 })}>
            <VStack
                w={'full'}
                flexDirection={'row'}
                justify={'flex-start'}
            >
                <Stack maxW={'4xl'} align={'flex-start'} spacing={useBreakpointValue({ base: 4, xl: 6 })}>
                    <Text
                        fontWeight={900}
                        fontSize={useBreakpointValue({ base: 'xl', md: '3xl' })}
                        letterSpacing={'8px'}>
                        {subheading}
                    </Text>
                    <Text
                        fontWeight={500}
                        lineHeight={1}
                        fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}>
                        {heading}
                    </Text>
                    <Text fontSize={useBreakpointValue({ base: 'md', md: '2xl' })}>
                        {text}
                    </Text>
                </Stack>
            </VStack>
            {otherProps.children}
        </Flex>
    );
}