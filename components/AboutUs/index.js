import {
    Flex,
    Text,
    Stack,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import aboutUsImg from '../../public/assets/aboutus.png'

const allTexts = [
    'Web3 at the University of Toronto Scarborough (W3B) is a student club organization that is passionate about Web3 and blockchain technology.',
    'Our members come from various backgrounds and have a shared interest in exploring the potential of this new and exciting field.',
    'We welcome anyone curious about Web3, whether you are a student, faculty member, or community member. Come and meet like-minded individuals and learn about the decentralized future of the Internet!'
]

export default function AboutUs({
    ...otherProps
}) {
    return (
        <VStack
            as={'section'}
            id='AboutUs'
            scrollSnapAlign={'start'}
            pt={{ base: 12, lg: 16 }}
            pb={{ base: 4 }}
            alignItems={'center'}
            justifyContent={'center'}
            minH={'100vh'}
            w={'full'}
            {...otherProps}
        >
            <Flex
                flexDirection={useBreakpointValue({ base: 'column', lg: 'row' })}
                gap={useBreakpointValue({ base: 2, lg: 16 })}
            >
                <Stack spacing={useBreakpointValue({ base: 4, md: 8 })}>
                    <Text
                        fontWeight={900}
                        fontSize={useBreakpointValue({ base: 'xl', md: '3xl' })}
                        letterSpacing={'8px'}>
                        ABOUT US
                    </Text>
                    <Text
                        fontWeight={500}
                        lineHeight={1}
                        fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}>
                        Who are we?
                    </Text>
                    <Stack spacing={6}>
                        {
                            allTexts.map((text, i) => (
                                <Text key={i} fontSize={useBreakpointValue({ base: 'md', md: '2xl' })} opacity={0.8}>
                                    {text}
                                </Text>
                            ))
                        }
                    </Stack>
                </Stack>
                <Flex>
                    <Image alt={'about us pic'} src={aboutUsImg} style={{ objectFit: 'cover' }} />
                </Flex>
            </Flex>
        </VStack>
    );
}