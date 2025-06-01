import {
    Box, Divider, Flex, Spacer, Stack, StackDivider, Text, useBreakpointValue
} from '@chakra-ui/react'

export default function TitleWithDivider({
    text,
    small,
    ...otherProps
}) {
    return (
        <Flex
            {...otherProps}
            alignItems={'center'}
            justifyContent={'center'}
            gap={useBreakpointValue({ base: 8, md: 12 })}>
            <Text
                fontWeight={500}
                lineHeight={1}
                color={"white"}
                fontSize={small ? useBreakpointValue({ base: 'xl', md: '2xl' }) : useBreakpointValue({ base: '2xl', md: '4xl' })}
                whiteSpace={'nowrap'}>
                {text}
            </Text>
            <Divider borderColor={'#F2F2F2'} />
        </Flex>
    );
};