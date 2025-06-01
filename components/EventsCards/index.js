import React, { useState } from 'react';
import {
    useBreakpointValue,
    SimpleGrid,
    Button,
    Box,
} from '@chakra-ui/react';
import TitleWithDivider from '../TitleWithDivider';
import EventCard from '../EventCard';
import EventsModal from '../EventsModal';

export default function EventsCards({
    titleName,
    eventsData,
    ...otherProps
}) {
    // State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Limit the displayed events to a maximum of 3
    const visibleEvents = eventsData.slice(0, 3);

    return (
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <TitleWithDivider text={titleName} />
            </Box>

            <SimpleGrid
                columns={useBreakpointValue({ base: 1, md: 2, lg: 3 })}
                spacingX={useBreakpointValue({ base: '20px', md: '40px' })}
                spacingY={useBreakpointValue({ base: '20px', md: '30px' })}
                gridAutoRows={'1fr'}
            >
                {visibleEvents.map((e, i) => {
                    return (
                        <EventCard key={i} {...e} />
                    )
                })}
            </SimpleGrid>
            {eventsData.length > 3 && (
                <Button onClick={() => setIsModalOpen(true)}>
                Show All {titleName}
                </Button>
            )}

            {/* EventsModal Component */}
            <EventsModal
                titleName={titleName}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                eventsData={eventsData}
            />
        </>
    );
}
