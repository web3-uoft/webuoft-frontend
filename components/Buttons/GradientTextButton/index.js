import {
    Box, useBreakpointValue
} from '@chakra-ui/react';

export default function GradientTextButton({
    display,
    px,
    py,
    fontSize,
    fontWeight,
    color,
    bg,
    text,
    lineHeight,
    ...otherProps
}) {
    return (
        <Box
            as='button'
            px={px ? px : useBreakpointValue({ base: '30px', md: '40px', xl: '50px' })}
            py={py ? py : useBreakpointValue({ base: '8px', md: '10px', xl: '12px' })}
            fontSize={fontSize ? fontSize : useBreakpointValue({ base: 'sm', md: 'md', xl: 'xl' })}
            color={color ? color : 'primary.400'}
            fontWeight={400}
            borderRadius='lg'
            className='gradientButton'
            {...otherProps} // other props can be passed into here
        >
            {text}
        </Box>
    );
}