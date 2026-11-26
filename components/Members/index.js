import { useBreakpointValue, SimpleGrid } from '@chakra-ui/react';
import TitleWithDivider from '../TitleWithDivider';
import MemberCard from '../MemberCard';

export default function Members({ titleName, members }) {
    return (
        <>
            <TitleWithDivider text={titleName} />
            <SimpleGrid
                columns={useBreakpointValue({ base: 2, md: 3, xl: 4 })}
                spacingX={useBreakpointValue({ base: '20px', md: '40px' })}
                spacingY={useBreakpointValue({ base: '20px', md: '30px' })}
                gridAutoRows={'1fr'}
            >
                {members.map((m) => (
                    <MemberCard key={m.id} {...m} />
                ))}
            </SimpleGrid>
        </>
    );
}
