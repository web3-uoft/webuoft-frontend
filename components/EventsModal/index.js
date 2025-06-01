import {
    useBreakpointValue,
    SimpleGrid,
    Button, 
    Modal, 
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    color,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import _ from 'lodash';
import EventCard from '../EventCard';

export default function EventsModal({
    titleName,
    eventsData,
    isOpen, 
    onClose, 
    ...otherProps
}) {
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const [size, setSize] = React.useState('full')
   
    const btnRef = React.useRef(null)

    return (
        <>
        <Modal onClose={onClose} eventsData={eventsData} isOpen={isOpen} size={size} scrollBehavior={scrollBehavior}>
          <ModalOverlay />
          <ModalContent padding="24px" bgColor="black">
            <ModalHeader fontSize="36px">{titleName}</ModalHeader>
            <ModalCloseButton />
            <ModalBody bgGradient={'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(84,56,126,0.4) 40%, rgba(230,141,153,0.1) 60%, rgba(0,0,0,1) 100%)'}>
              <SimpleGrid
                  columns={useBreakpointValue({ base: 1, md: 2, lg: 3 })}
                  spacingX={useBreakpointValue({ base: '20px', md: '40px' })}
                  spacingY={useBreakpointValue({ base: '20px', md: '30px' })}
                  gridAutoRows={'1fr'}
              >
                {eventsData.map((e, i) => {
                    return (
                        <EventCard key={i} {...e} />
                    )
                })}
              </SimpleGrid>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}