import { Flex, useBreakpointValue } from '@chakra-ui/react';
import w3bLogo from '../../public/assets/w3blogo.png'
import Image from 'next/image';
import ButtonLinkWrapper from '../Buttons/ButtonLinkWrapper';

export default function W3BLogo({
    width
}) {
    return (
        <ButtonLinkWrapper href={'/'}>
            <Flex width={width ? width : useBreakpointValue({ base: 28, md: 32, lg: 40 })}>
                <Image alt='w3b logo' src={w3bLogo} />
            </Flex>
        </ButtonLinkWrapper>
    )
}