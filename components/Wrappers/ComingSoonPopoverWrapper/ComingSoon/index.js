import {
    Flex,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'

export default function ComingSoon({
    textFontSize,
    ...otherProps
}) {
    return (
        <>
            <Flex
                borderRadius={'full'}
                bgGradient='linear(to-r, gradient1.400, gradient2.400)'
                justifyContent={'center'}
                alignItems={'center'}
                py={useBreakpointValue({ base: 1, md: 2 })}
                {...otherProps}
            >
                <Text fontSize={textFontSize}>Coming Soon! 👀</Text>
            </Flex>
        </>
    )
};