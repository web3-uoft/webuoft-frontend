import { Divider, Flex, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import Members from '../Members';
import PageHeaderTitleWrapper from '../Wrappers/PageHeaderTitleWrapper';
import TextButton from '../Buttons/TextButton';
import ButtonLinkWrapper from '../Buttons/ButtonLinkWrapper';

export default function Team({
    ...otherProps
}) {
    return (
        <PageHeaderTitleWrapper
            subheading={"INTRODUCING W3B"}
            heading={"Meet the Team"}
            text={"At W3B, we are a team of passionate students who are dedicated to bridging the gap between the Management and Computer Science, and promote Web3 technology and its potential benefits to the UofT community."}
            >
            <Members titleName={'Co-Presidents'} collectionName={'cps'} />
            <Members titleName={'Vice Presidents'} collectionName={'vps2'} />
            <Members titleName={'Directors'} collectionName={'directors'} />
            <Divider borderColor={'#F2F2F2'} />
            <Stack gap={'20px'} maxW={'6xl'}>
                <Text fontSize={useBreakpointValue({ base: 'md', md: '2xl' })}>
                    Are you passionate about Web3 and want to become a part of the community at UofT? Join us and be a 
                    part of the team! We are always looking for enthusiastic individuals who are willing to learn and contribute to our mission.
                </Text>
                <ButtonLinkWrapper href={'/contact'}>
                    <TextButton
                        letterSpacing={'2px'}
                        px={useBreakpointValue({ base: '20px', md: '22px', lg: '30px' })}
                        py={useBreakpointValue({ base: '10px', md: '14px', lg: '17px' })}
                        fontSize={useBreakpointValue({ base: 12, lg: 16 })}
                        text={'CONTACT US'} />
                </ButtonLinkWrapper>
            </Stack>
        </PageHeaderTitleWrapper>
    );
}