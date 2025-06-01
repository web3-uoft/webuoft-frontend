import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    Spacer,
} from '@chakra-ui/react';
import GradientTextButton from '../Buttons/GradientTextButton';
import ButtonLinkWrapper from '../Buttons/ButtonLinkWrapper';

export default function Hero({
    ...otherProps
}) {
    return (
        <Flex
            id='Hero'
            scrollSnapAlign={'center'}
            className='showcase'>
            <div className='video-container'>
                <video src="https://videos.ctfassets.net/qqk6u6a33mqj/4lcGTeQNYGCElWZUwITLRG/7bdd395d72fbaf05e340bce3a65c842a/ill_home.mp4"
                    autoPlay muted loop>
                </video>
            </div>
            <VStack
                zIndex={2}
                w={'full'}
                flexDirection={'row'}
                justify={'flex-start'}
                px={{ base: 8, md: 12, lg: 20 }}
            >
                <Stack maxW={'3xl'} align={'flex-start'} spacing={useBreakpointValue({ base: 4, xl: 6 })}>
                    <Text
                        fontWeight={600}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '5xl', md: '6xl', xl: '7xl' })}>
                        Welcome to Web3 at the University of Toronto!
                    </Text>
                    <Text
                        fontWeight={400}
                        fontSize={useBreakpointValue({ base: 'md', md: 'xl', xl: '2xl' })}>
                        Join us and learn about the future of the internet!
                    </Text>
                    <Spacer />
                    <ButtonLinkWrapper href={'https://www.instagram.com/web3.uoft/'} isExternal>
                        <GradientTextButton text="Join Us Now!" />
                    </ButtonLinkWrapper>
                </Stack>
            </VStack>
        </Flex>
    );
}