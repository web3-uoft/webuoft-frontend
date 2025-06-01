import NavBarWrapper from "@/components/Wrappers/NavBarWrapper";
import React from 'react';
import { Box, Button, Text, Center, useClipboard } from '@chakra-ui/react';

export default function ContractPage() {
    const contractAddress = '0xF2189a9737Dd80DBB2A25C56d7e613ac2636bD77';
    const { hasCopied, onCopy } = useClipboard(contractAddress);
    return (
        <>
            <NavBarWrapper>
                <Center h='60vh'>
                    <Box textAlign="center" p={4}>
                        <Text fontSize="lg" mb={4}>
                            {contractAddress}
                        </Text>
                        <Button onClick={onCopy}>
                            {hasCopied ? 'Copied' : 'Copy'}
                        </Button>
                    </Box>
                </Center>
            </NavBarWrapper>
        </>
    );
}
