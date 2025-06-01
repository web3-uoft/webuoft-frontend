import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import CustomIconButton from '../Buttons/CustomIconButton';
import W3BLogo from '../W3BLogo';
import ComingSoonPopoverWrapper from '../Wrappers/ComingSoonPopoverWrapper';
import ComingSoon from '../Wrappers/ComingSoonPopoverWrapper/ComingSoon';

export default function NavBar({
    ...otherProps
}) {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box
            id='nav'
            scrollSnapAlign={'center'}
            {...otherProps}>
            <Flex
                color={'primary.400'}
                minH={'60px'}
                pt={{ base: 12, lg: 16 }}
                pb={{ base: 4 }}
                px={{ base: 8, md: 12, lg: 20 }}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems={'center'}>
                    <W3BLogo />
                    <Flex display={{ base: 'none', md: 'flex' }} ml={useBreakpointValue({ base: 4, md: 8, lg: 16 })}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={{ base: 2, md: 4 }}>
                    {ICON_BUTTONS.map((iconItem) => (
                        <Box key={iconItem.label} display={{ base: 'none', md: 'flex' }}>
                            <CustomIconButton icon={<iconItem.icon size={useBreakpointValue({ base: "1rem", md: "1.2rem", lg: "1.6rem" })} />} href={iconItem.href} />
                        </Box>
                    ))}
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

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

const DesktopNav = () => {
    const linkColor = "gray.200"
    const linkHoverColor = "white"
    const popoverContentBgColor = "white"

    return (
        <Stack direction={'row'} spacing={useBreakpointValue({ md: 4, lg: 8, xl: 12 })}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <ComingSoonPopoverWrapper showPopover={!navItem.avail}>
                                <Link
                                    p={2}
                                    href={(navItem.avail && navItem.href) ? navItem.href : '#'}
                                    fontSize={useBreakpointValue({ md: 'sm', lg: 'md', xl: 'xl' })}
                                    fontWeight={600}
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor,
                                    }}>
                                    {navItem.label}
                                </Link>
                            </ComingSoonPopoverWrapper>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            px={8}
            py={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <Box
                    key={navItem.label}
                    position={'relative'}
                >
                    <MobileNavItem {...navItem} />
                    {
                        !navItem.avail ? (
                            <ComingSoon
                                textFontSize={8}
                                position={'absolute'}
                                top={2}
                                right={0}
                                width={20}
                            />
                        ) : null
                    }
                </Box>
            ))}
            <Stack spacing={4}>
                <Flex
                    py={2}
                    justify={'space-between'}
                    justifyContent={'center'}
                    align={'center'}
                    _hover={{
                        textDecoration: 'none',
                    }}>
                    {ICON_BUTTONS.map((iconItem) => (
                        <Box key={iconItem.label} display={{ base: 'flex', md: 'none' }}>
                            <CustomIconButton icon={<iconItem.icon size={"1rem"} />} href={iconItem.href} />
                        </Box>
                    ))}
                </Flex>
            </Stack>
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href, avail }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={avail ? href : null}
                justify={'space-between'}
                justifyContent={'center'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
        avail: true
    },
    {
        label: 'Team',
        href: 'team',
        avail: true
    },
    {
        label: 'Events',
        href: 'events',
        avail: true
    },
    {
        label: 'Contact',
        href: 'contact',
        avail: true
    },
    {
        label: 'My Wallet',
        href: 'wallet',
        avail: true
    },
];