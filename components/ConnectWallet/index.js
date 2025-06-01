"use client";

import React from "react";
import { Button, Box, useColorModeValue, Stack, Text } from "@chakra-ui/react";
import { useMetamask } from "@/hooks/useMetamask";
import TitleWithDivider from "../TitleWithDivider";

export default function ConnectWallet() {
  const {
    dispatch,
    state: { wallet },
  } = useMetamask();

  const handleConnect = async () => {
    dispatch({ type: "loading" });
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (accounts.length > 0) {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });
      dispatch({ type: "connect", wallet: accounts[0], balance });
    }
  };

  const handleDisconnect = () => {
    dispatch({ type: "disconnect" });
  };

  return (
    <Box
      color={useColorModeValue("gray.600", "white")}
      display="flex"
      justifyContent="left"
      alignItems="left"
    >
      {wallet ? (
        <Box>
          <Stack gap={"30px"}>
            <Button
              textColor="white"
              colorScheme="whiteAlpha"
              onClick={handleDisconnect}
            >
              Disconnect Wallet: {wallet}
            </Button>
            <TitleWithDivider
              text="My Digital Assets"
              small={true}
            ></TitleWithDivider>
            <Text color="whiteAlpha.800">
              None found at the moment! Join our events to collect our digital
              assets!
            </Text>
          </Stack>
        </Box>
      ) : (
        <Box>
          <Button
            textColor="white"
            colorScheme="whiteAlpha"
            onClick={handleConnect}
          >
            Connect Wallet
          </Button>
        </Box>
      )}
    </Box>
  );
}
