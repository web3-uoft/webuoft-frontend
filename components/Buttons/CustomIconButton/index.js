import { IconButton, Box } from '@chakra-ui/react'
import ButtonLinkWrapper from '../ButtonLinkWrapper';

export default function CustomIconButton({
    display,
    px,
    py,
    fontSize,
    fontWeight,
    color,
    bg,
    text,
    lineHeight,
    icon,
    href,
    ...otherProps
}) {
    return (
        <ButtonLinkWrapper display={display} href={href} isExternal={true}>
            <Box
                as='button'
                px={px ? px : '8px'}
                py={py ? py : '8px'}
                borderRadius={'lg'}
                color={'primary.400'}
                {...otherProps} // other props can be passed into here
            >
                {icon}
            </Box>
        </ButtonLinkWrapper>
    );
}