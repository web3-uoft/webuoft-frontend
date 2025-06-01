import {
    Button, 
    Modal, 
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Spacer
} from '@chakra-ui/react';
import React from 'react';
import _ from 'lodash';

export default function EventSignupFormModal({
    titleName,
    link,
    isOpen, 
    onClose, 
    ...otherProps
}) {
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const [size, setSize] = React.useState('full')
   
    return (
        <>
        <Modal onClose={onClose} isOpen={isOpen} size={size} scrollBehavior={scrollBehavior}>
          <ModalOverlay />
          <ModalContent padding="24px" bgColor="black">
            <ModalHeader fontSize="36px">{titleName}</ModalHeader>
            <ModalCloseButton />
            <ModalBody bgGradient={'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(84,56,126,0.4) 40%, rgba(230,141,153,0.1) 60%, rgba(0,0,0,1) 100%)'} display="flex">
                <Flex justifyContent={'center'} alignItems={'center'} width="100%">
                    <iframe src={link}
                        width="100%"
                        height="100%"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0">
                    </iframe>
                </Flex>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => window.open(link, '_blank')}>
                  Open in New Tab
              </Button>
              <Spacer /> 
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}