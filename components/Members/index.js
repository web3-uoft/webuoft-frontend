import {
    useBreakpointValue,
    SimpleGrid,
    Spinner,
    Flex,
} from '@chakra-ui/react';
import TitleWithDivider from '../TitleWithDivider';
import { useEffect, useState } from 'react';
import MemberCard from '../MemberCard';
import _ from 'lodash';

export default function Members({
    titleName,
    collectionName,
    ...otherProps
}) {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllMembers = async (collectionName) => {
        const membersResponse = await fetch("/api/team?" + new URLSearchParams({
            collectionName: collectionName
        }), { method: "GET" });
        const m = await membersResponse.json()
        return m;
    }

    useEffect(() => {
        async function foo(collectionName) {
            var lscrJSON;
            const lsAllResponse = localStorage.getItem(`members-${collectionName}`);
            lscrJSON = JSON.parse(lsAllResponse);
            if (lsAllResponse !== null){
                setIsLoading(false)
                setMembers(lscrJSON)
            }

            const allResponses = await getAllMembers(collectionName);
            if (!_.isEqual(lscrJSON, allResponses)) {
                console.log(`creating members-${collectionName}`)
                setMembers(allResponses)
                setIsLoading(false)
                localStorage.setItem(`members-${collectionName}`, JSON.stringify(allResponses));
            }
        }
        foo(collectionName);
    }, []);

    return (
        <>
            <TitleWithDivider text={titleName} />
            <Flex hidden={!isLoading} alignItems={'center'} justifyContent={'center'}>
                <Spinner size={'xl'} speed='0.8s'/>
            </Flex>
            <SimpleGrid
                hidden={isLoading}
                columns={useBreakpointValue({ base: 2, md: 3, xl: 4 })}
                spacingX={useBreakpointValue({ base: '20px', md: '40px' })}
                spacingY={useBreakpointValue({ base: '20px', md: '30px' })}
                gridAutoRows={'1fr'}
            >
                {members && members.data && members.data.map((m, i) => {
                    return (
                        <MemberCard key={i} {...m} />
                    )
                })}
            </SimpleGrid>
        </>
    );
}