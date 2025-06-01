import {
    Flex,
    Popover,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Text,
    useBreakpointValue,
    useDisclosure
} from '@chakra-ui/react'
import { cloneElement } from 'react'
import ComingSoon from './ComingSoon'

export default function ComingSoonPopoverWrapper({
    showPopover,
    ...otherProps
}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return showPopover ? (
        <>
            <Popover
                isOpen={isOpen}
                onClose={onClose}
                placement='top'
                returnFocusOnClose={false}
                autoFocus={false}
            >
                <PopoverTrigger>
                    {
                        cloneElement(otherProps.children, {
                            onMouseEnter: onOpen,
                            onMouseLeave: onClose,
                        })
                    }
                </PopoverTrigger>
                <PopoverContent bg={'transparent'} alignItems={'center'} border={'none'}>
                    <ComingSoon
                        width={useBreakpointValue({ md: 32, lg: 36, xl: 48 })}
                        textFontSize={useBreakpointValue({ md: 12, lg: 12, xl: 16 })}
                    />
                </PopoverContent>
            </Popover>
        </>
    ) : (otherProps.children)
};