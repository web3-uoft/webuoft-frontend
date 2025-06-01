import {
    Flex,
    Text,
    Stack,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import coinImg from '../../public/assets/coin.png'
import TextButton from '../Buttons/TextButton';
import ButtonLinkWrapper from '../Buttons/ButtonLinkWrapper';

export default function ReadyToWork({
    ...otherProps
}) {
    return (
        <VStack
            as={'section'}
            id='ReadyToWork'
            scrollSnapAlign={'start'}
            pt={{ base: 12, lg: 16 }}
            pb={{ base: 4 }}
            alignItems={'center'}
            justifyContent={'center'}
            // minH={'100vh'}
            w={'full'}
            {...otherProps}
        >
            <Flex
                flexDirection={useBreakpointValue({ base: 'column', lg: 'row' })}
                gap={useBreakpointValue({ base: 2, lg: 16 })}
            >
                <Stack spacing={useBreakpointValue({ base: 4, md: 8 })} flex={2}>
                    <Text
                        fontWeight={500}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}>
                        Ready to work with us?
                    </Text>
                    <Stack spacing={6}>
                        <Text fontFamily={'Source Sans Pro'} fontSize={useBreakpointValue({ base: 'md', md: '2xl' })}>
                            Have an idea for a workshop? Want to sponsor W3B?
                            <br />
                            Send us a message and let's talk about it.
                        </Text>
                    </Stack>
                    <ButtonLinkWrapper href={'/contact'}>
                        <TextButton
                            letterSpacing={'2px'}
                            px={useBreakpointValue({ base: '30px', md: '32px', lg: '40px' })}
                            py={useBreakpointValue({ base: '8px', md: '12px', lg: '17px' })}
                            fontSize={useBreakpointValue({ base: '11px', lg: 16 })}
                            text={'CONTACT US'} />
                    </ButtonLinkWrapper>
                </Stack>
                <Flex flex={1}>
                    <Image alt={'about us pic'} src={coinImg} style={{ objectFit: 'cover' }} />
                </Flex>
            </Flex>
        </VStack>
    );
}