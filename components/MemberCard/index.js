import {
    Heading,
    Box,
    Center,
    Flex,
    Text,
    Stack,
    useBreakpointValue,
    Image,
} from '@chakra-ui/react';
import React from 'react';
import * as FontAwesome from "react-icons/fa";
import CustomIconButton from '../Buttons/CustomIconButton';

const addMailto = (email) => {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailRegex.test(email)) {
        return "mailto:" + email;
    } else {
        return email;
    }
}

const nameLengthToFontSize = (name, def) => {
    // const width = useBreakpointValue({ base: 'lg', lg: '3xl' });
    // if (name.length >= 15) {
    //     return '1.5em';
    // } else {
    //     return def;
    // }
    return def;
}

const shortenName = (fullName) => {
    let nameParts = fullName.split(' ');
    if (nameParts.length < 2) {
        return fullName;
    }
    let firstName = nameParts[0];
    let lastName = nameParts[nameParts.length - 1];
    if (fullName.length <= 17){
        return fullName
    }
    let shortenedLastName = lastName.charAt(0) + '.';
    let shortenedName = firstName + ' ' + shortenedLastName;
    return shortenedName;
}

const iconNamesDict = {
    1: "FaLinkedin",
    2: "FaGithub",
    3: "FaEnvelope", // email
    4: "FaGlobe", // personal website or any website
    5: "FaYoutube",
    6: "FaInstagram",
    7: "FaLink", // anything else
}

const changeIconName = ({link, iconName}) => {
    if (link.includes("github")) {
        return iconNamesDict[2]
    }

    if (link.includes("linkedin")) {
        return iconNamesDict[1]
    }

    if (link.includes("youtube")) {
        return iconNamesDict[5]
    }

    if (link.includes("instagram")) {
        return iconNamesDict[6]
    }

    if (link.includes("mail")) {
        return iconNamesDict[3]
    }

    // Check if iconName is defined and is a number within the dictionary keys
    if (iconName !== undefined && iconNamesDict[iconName]) {
        return iconNamesDict[iconName];
    }
    // Return default icon name if iconName is not defined
    if (iconName === undefined) {
        return iconNamesDict[7];
    }
    // Return iconName as it is if it's not a valid key in the dictionary
    return iconName;
}

export default function MemberCard({
    id, name, title, imageLink, links
}) {
    return (
        <Center>
            <Box
                p={useBreakpointValue({ base: 4, lg: 6 })}
                maxW={'450px'}
                w={'full'}
                h={'100%'}
                border={'1px solid #F2F2F2'}
                overflow={'hidden'}>
                <Flex
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, lg: 8, xl: 12 })}
                    pt={useBreakpointValue({ base: 4, lg: 8 })}
                >
                    <Image
                        width={'200px'}
                        objectFit='cover'
                        borderRadius={'full'}
                        src={imageLink !== '' ? imageLink : '/assets/default-avatar.jpg'}
                        alt={id}
                    />
                </Flex>

                <Box p={useBreakpointValue({ base: 2, lg: 6 })}>
                    <Stack 
                        spacing={2}
                        align={'center'}
                        height={'8vh'}
                        justifyContent={'flex-end'}>
                        <Heading
                            fontSize={nameLengthToFontSize(name,useBreakpointValue({ base: 'lg', lg: '3xl' }))}
                            fontWeight={500}
                            whiteSpace={'nowrap'}>
                            {shortenName(name)}
                        </Heading>
                        <Text
                            fontSize={useBreakpointValue({ base: 'xs', lg: 'md' })}
                            whiteSpace={'nowrap'}>
                            {title}
                        </Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={0} pt={2}>
                        {
                            links.map((l, i) => {
                                return (
                                    <CustomIconButton key={i} href={addMailto(l.link)} icon={React.createElement(FontAwesome[`${changeIconName(l)}`])} />
                                )
                            })
                        }
                    </Stack>
                </Box>
            </Box>
        </Center>
    );
}