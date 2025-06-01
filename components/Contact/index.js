import { Box, Flex, IconButton, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import PageHeaderTitleWrapper from '../Wrappers/PageHeaderTitleWrapper';
import { MdEmail } from 'react-icons/md';
import { HiMapPin } from 'react-icons/hi2';
import { FaInstagram } from 'react-icons/fa';
import CustomIconButton from '../Buttons/CustomIconButton';
import Link from 'next/link';

const contactInfo = [
    {
        icon: FaInstagram,
        text: '@web3.uoft',
        href: 'https://www.instagram.com/web3.uoft/'
    },
    {
        icon: MdEmail,
        text: 'web3uoft@gmail.com',
        href: 'mailto:web3uoft@gmail.com',
    },
    {
        icon: HiMapPin,
        text: '1265 Military Trail, Scarborough, ON M1C 1A4',
        href: 'https://goo.gl/maps/XmUPq1kJMnEMarHp8',
    },
]

export default function Team({
    ...otherProps
}) {
    return (
        <PageHeaderTitleWrapper
            subheading={"REACH OUT!"}
            heading={"Contact"}
            text={"Have a question, comment or suggestion? We'd love to hear from you! Contact us through the information and forms provided below."}
            gap={4}
            >
            <Stack>
                {
                    contactInfo.map((c, i) => (
                        <Flex key={i} gap={'10px'} alignItems={'center'}>
                            <CustomIconButton px={'0px'} py={0} icon={<c.icon size={useBreakpointValue({ base: '1rem', md: '1.5rem' })} />} href={c.href} target='_blank'/>
                            <Link href={c.href} target='_blank' >
                                <Text fontSize={useBreakpointValue({ base: 'xs', md: 'md' })} _hover={{ textDecoration: 'underline' }}>{c.text}</Text>
                            </Link>
                        </Flex>
                    ))
                }
            </Stack>
        </PageHeaderTitleWrapper>
    );
}