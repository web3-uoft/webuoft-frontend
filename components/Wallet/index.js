import {
  Divider,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import PageHeaderTitleWrapper from "../Wrappers/PageHeaderTitleWrapper";
import ConnectWallet from "../ConnectWallet";

export default function Events({ ...otherProps }) {
  return (
    <PageHeaderTitleWrapper
      subheading={""}
      heading={"My Wallet"}
      text={
        "Connect your Metamask Wallet below to be able to see the digital assets you have retrieved from us throughout our events!"
      }
    >
      <ConnectWallet></ConnectWallet>
    </PageHeaderTitleWrapper>
  );
}
