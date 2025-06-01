import {
    Flex,
    Text,
    Stack,
    VStack,
    useBreakpointValue,
    Box,
    SimpleGrid,
} from '@chakra-ui/react';
import InfoCard from '../InfoCard';
import booksImg from '../../public/assets/books.png'
import pplImg from '../../public/assets/ppl.png'
import graphImg from '../../public/assets/graph.png'

const infoCards = [
    {
        imgSrc: booksImg.src,
        heading: "Workshops and Education",
        text: "Learn about the basics of Web3 and explore its potential with our educational workshops and materials. We offer a variety of sessions that cater to different levels of expertise, so whether you are new to the space or an experienced user, we have something for you!",
    },
    {
        imgSrc: pplImg.src,
        heading: "Networking and Events",
        text: "Connect with industry professionals, entrepreneurs, and fellow students at our networking events and conferences. Also, take a break from your studies and join us for our recreational events!",
    },
    {
        imgSrc: graphImg.src,
        heading: "DaVinci Competition",
        text: "Participate in our annual DaVinci Competition, where teams showcase their creativity and technical skills by developing innovative projects and compete for prizes! ",
    }
]

export default function WhatWeDo({
    ...otherProps
}) {
    return (
        <VStack
            as={'section'}
            id='WhatWeDo'
            scrollSnapAlign={'start'}
            pt={{ base: 12, lg: 16 }}
            pb={{ base: 12 }}
            justifyContent={'flex-start'}
            spacing={12}
            w={'full'}
            {...otherProps}
        >
            <Text
                alignSelf={'flex-start'}
                fontWeight={500}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}>
                What do we do?
            </Text>
            <Flex
                flexDirection={useBreakpointValue({ base: 'column', lg: 'row' })}
                gap={useBreakpointValue({ base: 2, md: 8, lg: 16 })}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    {
                        infoCards.map((infoCard, i) => (
                            <InfoCard key={i} imgSrc={infoCard.imgSrc} heading={infoCard.heading} text={infoCard.text} />
                        ))
                    }
                </SimpleGrid>
            </Flex>
        </VStack>
    );
}