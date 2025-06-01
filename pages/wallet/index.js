import Wallet from "@/components/Wallet";
import NavBarWrapper from "@/components/Wrappers/NavBarWrapper";
import { Stack } from "@chakra-ui/react";

export default function WalletPage() {
  return (
    <>
      <NavBarWrapper>
        <Stack gap={4} pt={{ base: 12, lg: 16 }}>
          <Wallet />
        </Stack>
      </NavBarWrapper>
    </>
  );
}
