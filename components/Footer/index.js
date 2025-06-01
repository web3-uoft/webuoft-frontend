import {
    Box,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import CustomIconButton from '../Buttons/CustomIconButton';
import W3BLogo from '../W3BLogo';
import { useRouter } from 'next/router';

const ICON_BUTTONS = [
    {
        label: 'linkedin',
        icon: FaLinkedinIn,
        href: 'https://www.linkedin.com/company/web3uoft/ '
    },
    {
        label: 'instagram',
        icon: FaInstagram,
        href: 'https://www.instagram.com/web3.uoft/'
    }
]
  
export default function Footer() {
    const router = useRouter();

    return (
        <Box opacity={0.7}
            >
            <Stack
                px={{ base: 8, md: 12, lg: 20 }}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Box>
                    <Box hidden={router.pathname.includes('contact')}>
                        <W3BLogo width={24}/>
                    </Box>
                </Box>
                <Text>Made with ♡ by the W3B Team.</Text>
                <Stack direction={'row'} spacing={6}>
                    {ICON_BUTTONS.map((iconItem) => (
                        <Box key={iconItem.label} display={'flex'} hidden={router.pathname.includes('contact')}>
                            <CustomIconButton icon={<iconItem.icon size={useBreakpointValue({ base: "1rem", md: "1.2rem", lg: "1.6rem" })} />} href={iconItem.href} />
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
}